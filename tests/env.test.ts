import { describe, expect, it } from 'vitest';
import { parseServerEnv } from '../schemas/env';

describe('server environment', () => {
  it('normalizes blank optional values and provides safe defaults', () => {
    const env = parseServerEnv({ SANITY_PROJECT_ID: '', RESEND_API_KEY: '' });
    expect(env.SANITY_PROJECT_ID).toBeUndefined();
    expect(env.RESEND_API_KEY).toBeUndefined();
    expect(env.SITE_URL).toBe('https://pecmediaproduction.com');
  });

  it('rejects invalid email configuration', () => {
    expect(() => parseServerEnv({ CONTACT_TO_EMAIL: 'not-an-email' })).toThrow();
  });
});
