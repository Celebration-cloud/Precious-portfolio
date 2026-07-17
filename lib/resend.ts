import 'server-only';

import { Resend } from 'resend';
import { businessInfo } from '../data/content';
import type { ContactInput } from '../schemas/contact';
import { getServerEnv } from './env';

let resend: Resend | null | undefined;

function getResend(): Resend | null {
  if (resend !== undefined) return resend;
  const apiKey = getServerEnv().RESEND_API_KEY;
  resend = apiKey ? new Resend(apiKey) : null;
  return resend;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

export async function sendContactNotification(
  payload: ContactInput,
): Promise<{ success: true } | { success: false }> {
  const env = getServerEnv();
  const client = getResend();

  if (!client || !env.CONTACT_FROM_EMAIL) {
    console.error('Contact email delivery is not configured.');
    return { success: false };
  }

  const html = `
    <h2>New Contact Inquiry - PEC Media Production</h2>
    <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(payload.phone || 'N/A')}</p>
    <p><strong>Service:</strong> ${escapeHtml(payload.service || 'N/A')}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(payload.message).replaceAll('\n', '<br />')}</p>
  `;

  try {
    const response = await client.emails.send({
      from: env.CONTACT_FROM_EMAIL,
      to: env.CONTACT_TO_EMAIL || businessInfo.email,
      replyTo: payload.email,
      subject: `New Contact Inquiry from ${payload.name}`,
      html,
    });

    if (response.error) {
      console.error('Resend rejected the contact notification.', response.error);
      return { success: false };
    }

    return { success: true };
  } catch (error) {
    console.error('Failed to send contact notification.', error);
    return { success: false };
  }
}
