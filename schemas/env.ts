import { z } from 'zod';

const optionalString = z.preprocess(
  (value) => (typeof value === 'string' && value.trim() === '' ? undefined : value),
  z.string().trim().min(1).optional(),
);

const optionalUrl = z.preprocess(
  (value) => (typeof value === 'string' && value.trim() === '' ? undefined : value),
  z.string().url().optional(),
);

export const serverEnvSchema = z.object({
  SITE_URL: optionalUrl.default('https://pecmediaproduction.com'),
  SANITY_PROJECT_ID: optionalString,
  SANITY_DATASET: optionalString.default('production'),
  SANITY_API_VERSION: optionalString.default('2024-01-01'),
  SANITY_API_TOKEN: optionalString,
  SANITY_REVALIDATE_SECRET: optionalString,
  RESEND_API_KEY: optionalString,
  CONTACT_TO_EMAIL: z.preprocess(
    (value) => (typeof value === 'string' && value.trim() === '' ? undefined : value),
    z.string().email().optional(),
  ),
  CONTACT_FROM_EMAIL: z.preprocess(
    (value) => (typeof value === 'string' && value.trim() === '' ? undefined : value),
    z.string().email().optional(),
  ),
});

export type ServerEnv = z.infer<typeof serverEnvSchema>;

export function parseServerEnv(input: Record<string, unknown>): ServerEnv {
  return serverEnvSchema.parse(input);
}
