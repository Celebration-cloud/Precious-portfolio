'use server';

import { ContactService } from '../services/contact-service';

export async function submitContactForm(formData: unknown) {
  const service = new ContactService();
  return await service.execute(formData);
}
