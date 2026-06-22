import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const RECIPIENT_EMAIL =
  process.env.CONTACT_FORM_EMAIL || "info@nfmedialab.it";
const FROM_EMAIL = "NF Media Lab <info@nfmedialab.it>";

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

    // Invio email
    const response = await resend.emails.send({
      from: FROM_EMAIL,
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: `Nuovo messaggio di contatto da ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #030303;">Nuovo Messaggio di Contatto</h2>

          <p>
            <strong>Nome/Azienda:</strong>
            ${escapeHtml(name)}
          </p>

          <p>
            <strong>Email:</strong>
            <a href="mailto:${escapeHtml(email)}">
              ${escapeHtml(email)}
            </a>
          </p>

          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />

          <h3 style="color: #030303;">Messaggio:</h3>

          <p style="white-space: pre-wrap; color: #666;">
            ${escapeHtml(message)}
          </p>

          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />

          <p style="font-size: 12px; color: #999;">
            Questo messaggio è stato inviato tramite il modulo di contatto di NF MEDIA LAB
          </p>
        </div>
      `,
    });

    // Gestione errore Resend
    if ("error" in response && response.error) {
      console.error("Errore Resend:", response.error);

      return NextResponse.json(
        {
          error: "Errore nell'invio dell'email",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Email inviata con successo",
      id: response.data?.id ?? null,
    });
  } catch (error) {
    console.error("Errore nell'invio dell'email:", error);

    return NextResponse.json(
      {
        error: "Errore nell'invio del messaggio",
      },
      { status: 500 }
    );
  }
}

// Escape HTML
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };

  return text.replace(/[&<>"']/g, (m) => map[m]);
}
