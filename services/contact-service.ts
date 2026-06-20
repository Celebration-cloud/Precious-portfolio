import { contactSchema } from '../domain/entities/contact';
import { IContactRepository } from '../domain/interfaces/contact-repository.interface';
import { ContactRepository } from '../repositories/contact-repository';
import { sendContactNotification } from '../lib/resend';

export class ContactService {
  private repository: IContactRepository;

  constructor(repository: IContactRepository = new ContactRepository()) {
    this.repository = repository;
  }

  async execute(input: unknown) {
    // 1. Validate inputs using Zod schema
    const result = contactSchema.safeParse(input);
    if (!result.success) {
      return {
        success: false,
        errors: result.error.flatten().fieldErrors,
        message: 'Validation failed.',
      };
    }

    const data = result.data;

    try {
      // 2. Persist to Neon PostgreSQL Database via repository
      const savedMessage = await this.repository.create(data);

      // 3. Send email notification via Resend Infrastructure
      await sendContactNotification(data);

      return {
        success: true,
        data: savedMessage,
        message: 'Thank you for reaching out! Your message has been received.',
      };
    } catch (error) {
      console.error('Error in ContactService execute:', error);
      return {
        success: false,
        message: 'An error occurred while saving your message. Please try again later.',
      };
    }
  }
}
