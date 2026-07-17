'use server';

import { sendContactNotification } from '../lib/resend';
import { contactSchema, type ContactActionResult, type ContactInput } from '../schemas/contact';

export async function submitContactForm(input: unknown): Promise<ContactActionResult> {
  const result = contactSchema.safeParse(input);

  if (!result.success) {
    return {
      success: false,
      message: 'Please review the highlighted fields and try again.',
      fieldErrors: result.error.flatten().fieldErrors as Partial<
        Record<keyof ContactInput, string[]>
      >,
    };
  }

  const delivery = await sendContactNotification(result.data);
  if (!delivery.success) {
    return {
      success: false,
      message: 'We could not send your message right now. Please email or call us directly.',
    };
  }

  return {
    success: true,
    message: 'Thank you for reaching out! Your message has been sent.',
  };
}
