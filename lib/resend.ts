import { Resend } from 'resend';
import { businessInfo } from '../src/data/content';

const resendApiKey = process.env.RESEND_API_KEY;

export const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function sendContactNotification(payload: {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}) {
  const toEmail = process.env.CONTACT_TO_EMAIL || businessInfo.email;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';

  const html = `
    <h2>New Contact Inquiry - PEC Media Production</h2>
    <p><strong>Name:</strong> ${payload.name}</p>
    <p><strong>Email:</strong> ${payload.email}</p>
    <p><strong>Phone:</strong> ${payload.phone || 'N/A'}</p>
    <p><strong>Service:</strong> ${payload.service || 'N/A'}</p>
    <p><strong>Message:</strong></p>
    <p>${payload.message.replace(/\n/g, '<br />')}</p>
  `;

  if (!resend) {
    console.log('--- MOCK EMAIL SENT (Resend not configured) ---');
    console.log(`From: ${fromEmail}`);
    console.log(`To: ${toEmail}`);
    console.log(`Subject: New Contact Inquiry from ${payload.name}`);
    console.log(`HTML Body:\n${html}`);
    console.log('------------------------------------------------');
    return { success: true, mock: true };
  }

  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `New Contact Inquiry from ${payload.name}`,
      html: html,
    });
    return { success: true, data };
  } catch (error) {
    console.error('Failed to send contact notification email via Resend:', error);
    return { success: false, error };
  }
}
