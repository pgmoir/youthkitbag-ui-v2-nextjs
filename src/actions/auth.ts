'use server';

import { FormState, LoginFormSchema } from '@/lib/definitions';

export async function login(state: FormState, formData: FormData) {
  const email = formData.get('email')?.toString() || '';
  const password = formData.get('password')?.toString() || '';
  const originalState = { email, password };

  // Validate form fields
  const result = LoginFormSchema.safeParse({
    email,
    password,
  });

  // If any form fields are invalid, return early
  if (!result.success) {
    const rawErrors = result.error.flatten().fieldErrors;

    // 🔽 Only take the first error per field
    const firstErrors: Record<string, string> = {};
    for (const key of Object.keys(rawErrors) as (keyof typeof rawErrors)[]) {
      const messages = rawErrors[key];
      if (messages && messages.length > 0) {
        firstErrors[key] = messages[0];
      }
    }

    return {
      errorMessage: 'Validation failed',
      errors: firstErrors,
      data: originalState,
    };
  }

  const response = await fetch(`${process.env.API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    return {
      errorMessage: (errorData.message as string) || 'Login failed',
      data: originalState,
    };
  }

  await response.json();

  return {
    message: 'Login successful!',
    data: originalState,
  };
}
