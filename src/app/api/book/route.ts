import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/rate-limit";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL || process.env.KV_URL || "",
  token: process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN || process.env.KV_REST_API_READ_ONLY_TOKEN || "",
});

const resend = new Resend(process.env.RESEND_API_KEY);

const RECIPIENT_EMAIL = process.env.CONTACT_FORM_EMAIL || "info@nfmedialab.it";
const FROM_EMAIL = "NF Media Lab <info@nfmedialab.it>";

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, role, notes, date, time, botCheck } = await request.json();

    // 1. Honeypot check (Se il campo invisibile è compilato, è un bot)
    if (botCheck) {
      // Fingiamo successo per confondere il bot senza inviare nulla
      return NextResponse.json({ success: true });
    }

    // 2. Rate Limiting per IP
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    const rateLimitResult = checkRateLimit(ip, 3, 60000); // Max 3 richieste al minuto
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: "Troppe richieste. Riprova più tardi." },
        { status: 429 }
      );
    }

    // Base validation
    if (!name || !email || !date || !time || !company || !role || !notes) {
      return NextResponse.json(
        { error: "Tutti i campi sono obbligatori" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email non valida" },
        { status: 400 }
      );
    }

    // 1. Send Email to NF Media Lab (Owner)
    const ownerEmailResponse = await resend.emails.send({
      from: FROM_EMAIL,
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: `Nuova Prenotazione Call da ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #030303;">Nuova Prenotazione Call</h2>
          <p style="font-size: 16px; color: #333;">Hai ricevuto una nuova richiesta di call dal sito web.</p>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0 0 10px 0;"><strong>Data e Ora scelti:</strong><br/>
            ${escapeHtml(date)} alle ${escapeHtml(time)}</p>
          </div>

          <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
          ${company ? `<p><strong>Azienda:</strong> ${escapeHtml(company)}</p>` : ''}
          ${role ? `<p><strong>Ruolo:</strong> ${escapeHtml(role)}</p>` : ''}
          
          ${notes ? `
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
          <h3 style="color: #030303;">Note:</h3>
          <p style="white-space: pre-wrap; color: #666;">${escapeHtml(notes)}</p>
          ` : ''}
        </div>
      `,
    });

    // 2. Send Confirmation Email to the User
    const userEmailResponse = await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: `Conferma richiesta call - NF Media Lab`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #000;">Richiesta Ricevuta!</h2>
          <p>Ciao ${escapeHtml(name.split(' ')[0])},</p>
          <p>Ti confermiamo di aver ricevuto la tua richiesta per una call conoscitiva.</p>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #000;">
            <p style="margin: 0 0 5px 0;"><strong>Data:</strong> ${escapeHtml(date)}</p>
            <p style="margin: 0;"><strong>Ora:</strong> ${escapeHtml(time)}</p>
          </div>
          
          <p>Ti contatteremo a breve per confermare l'appuntamento e inviarti il link per la video call.</p>
          <p>Se hai necessità di modificare l'orario, puoi rispondere direttamente a questa email.</p>
          
          <br/>
          <p style="margin-bottom: 0;">A presto,</p>
          <p style="margin-top: 5px; font-weight: bold;">Il team di NF Media Lab</p>
        </div>
      `,
    });

    if ("error" in ownerEmailResponse && ownerEmailResponse.error) {
      console.error("Errore Resend Owner:", ownerEmailResponse.error);
      // In localhost or development, Resend might fail if the domain is not verified. 
      // We log the error but still return success to the user so the flow doesn't break locally.
      if (process.env.NODE_ENV !== "development") {
        return NextResponse.json({ error: "Errore nell'invio della notifica all'amministratore. Verifica che il dominio sia verificato su Resend." }, { status: 500 });
      }
    }

    if ("error" in userEmailResponse && userEmailResponse.error) {
      console.error("Errore Resend User:", userEmailResponse.error);
      // We don't fail the whole request if only the user email fails, but it's good to log
    }

    // 3. Salva la prenotazione nel Database Redis
    try {
      const slotKey = `slot:${date}:${time}`;
      await redis.set(slotKey, { 
        name, 
        email, 
        company, 
        role, 
        timestamp: Date.now() 
      });
      // Aggiungiamo anche il key ad una lista di date occupate per una lettura rapida
      await redis.sadd('booked_slots', slotKey);
    } catch (kvError) {
      console.error("Errore salvataggio Redis:", kvError);
      // Non blocchiamo il successo per l'utente, ma logghiamo l'errore per noi
    }

    return NextResponse.json({
      success: true,
      message: "Prenotazione inviata con successo",
    });
  } catch (error) {
    console.error("Errore nella prenotazione della call:", error);
    return NextResponse.json(
      { error: "Errore nell'invio della richiesta" },
      { status: 500 }
    );
  }
}

function escapeHtml(unsafe: string) {
  if (!unsafe) return "";
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
