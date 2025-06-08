import { z } from 'zod';

// Common validation messages
export const validationMessages = {
  required: 'This field is required',
  email: 'Please enter a valid email address',
  min: (length: number) => `Must be at least ${length} characters`,
  max: (length: number) => `Must be at most ${length} characters`,
};

// Base schemas
export const emailSchema = z
  .string()
  .min(1, validationMessages.required)
  .email(validationMessages.email);

export const passwordSchema = z
  .string()
  .min(8, validationMessages.min(8))
  .max(100, validationMessages.max(100));

// Auth schemas
export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export const registerSchema = z
  .object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

// User schemas
export const userProfileSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  bio: z.string().optional(),
  website: z.string().url('Please enter a valid URL').or(z.literal('')).optional(),
});

// Export types
export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type UserProfileInput = z.infer<typeof userProfileSchema>;

// Utility function for validating form data
export async function validateFormData<T extends z.ZodTypeAny>(
  schema: T,
  data: unknown
): Promise<{ data: z.infer<T>; errors: Record<string, string> | null }> {
  try {
    const validatedData = await schema.parseAsync(data);
    return { data: validatedData, errors: null };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors = error.errors.reduce<Record<string, string>>((acc, curr) => {
        const key = curr.path.join('.');
        acc[key] = curr.message;
        return acc;
      }, {});
      return { data: data as z.infer<T>, errors };
    }
    throw error;
  }
}
