import { describe, expect, it } from 'vitest';
import { contactSchema } from '../schemas/contact';

const validContact = {
  name: 'Precious Edemu',
  email: 'client@example.com',
  phone: '08133678261',
  service: 'video-production',
  message: 'I would like to discuss a new production project.',
  website: '',
};

describe('contactSchema', () => {
  it('accepts a valid inquiry', () => {
    expect(contactSchema.safeParse(validContact).success).toBe(true);
  });

  it('rejects honeypot submissions', () => {
    expect(contactSchema.safeParse({ ...validContact, website: 'spam.example' }).success).toBe(
      false,
    );
  });

  it('enforces message and email limits', () => {
    expect(
      contactSchema.safeParse({ ...validContact, email: 'invalid', message: 'short' }).success,
    ).toBe(false);
  });
});
