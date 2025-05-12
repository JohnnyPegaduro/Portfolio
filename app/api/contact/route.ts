// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Validación con Zod
const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1)
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = contactSchema.parse(body);

    // Configura tu transport (SMTP)
    const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  },
  tls: {
    // Permite certificados autofirmados
    rejectUnauthorized: false
  }
});

    // Envía el email
    await transporter.sendMail({
  from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,    // tu cuenta SMTP
  to: process.env.EMAIL_TO,
  replyTo: `${name} <${email}>`,                             // aquí va el email del visitante
  subject: `Nuevo mensaje de ${name}`,
  text: `Nombre: ${name}\nEmail: ${email}\n\n${message}`
});

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      { error: err.message || 'Error sending email' },
      { status: 400 }
    );
  }
}
