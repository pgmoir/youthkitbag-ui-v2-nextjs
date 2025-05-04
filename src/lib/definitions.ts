import { z } from 'zod';

export const LoginFormSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .nonempty('Email is required')
    .email('Invalid format for email'),
  password: z
    .string({ required_error: 'Password is required' })
    .nonempty('Password is required')
    .min(8, 'Password must be at least 8 characters'),
});

export type FormState =
  | {
      errors: {
        email?: string;
        password?: string;
      };
      errorMessage: string;
      data: {
        email?: string;
        password?: string;
      };
    }
  | {
      errorMessage: string;
      data: {
        email?: string;
        password?: string;
      };
    }
  | {
      data: {
        email: string;
        password: string;
      };
      message?: string;
    }
  | undefined;
