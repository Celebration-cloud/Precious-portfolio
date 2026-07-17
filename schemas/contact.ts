import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters.' })
    .max(100, { message: 'Name cannot exceed 100 characters.' })
    .trim(),
  email: z.string().email({ message: 'Please enter a valid email address.' }).trim(),
  phone: z
    .string()
    .max(20, { message: 'Phone number cannot exceed 20 characters.' })
    .optional()
    .or(z.literal('')),
  service: z
    .string()
    .max(50, { message: 'Service name cannot exceed 50 characters.' })
    .optional()
    .or(z.literal('')),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters.' })
    .max(2000, { message: 'Message cannot exceed 2000 characters.' })
    .trim(),
  website: z.string().max(0, { message: 'Spam submission rejected.' }).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

export type ContactActionResult =
  | { success: true; message: string }
  | {
      success: false;
      message: string;
      fieldErrors?: Partial<Record<keyof ContactInput, string[]>>;
    };
