import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const RECIPIENT_EMAIL = process.env.CONTACT_FORM_EMAIL || "info@nfmediaagency.com";

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validazione base
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Tutti i campi sono obbligatori" },
        { status: 400 }
      );
    }

    // Validazione email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email non valida" },
        { status: 400 }
      );
    }

    // Invia email
    const data = await resend.emails.send({
      from: "NF Media Contact Form <onboarding@resend.dev>",
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: `Nuovo messaggio di contatto da ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #030303;">Nuovo Messaggio di Contatto</h2>
          <p><strong>Nome/Azienda:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
          <h3 style="color: #030303;">Messaggio:</h3>
          <p style="white-space: pre-wrap; color: #666;">${escapeHtml(message)}</p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
          <p style="font-size: 12px; color: #999;">
            Questo messaggio è stato inviato tramite il modulo di contatto di NF MEDIA AGENCY
          </p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Email inviata con successo",
      id: data?.id,
    });
  } catch (error) {
    console.error("Errore nell'invio dell'email:", error);
    return NextResponse.json(
      { error: "Errore nell'invio del messaggio" },
      { status: 500 }
    );
  }
}

// Funzione di utilità per escape HTML
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
