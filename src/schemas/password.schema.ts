import { z } from "zod";

export const RecoveryCreateSchema = z.object({ email: z.string().email() });

export const RecoveryUpdateSchema = z.object({ password: z.string() });

export const PasswordUpdateSchema = z.object({
  oldPassword: z.string(),
  password: z.string(),
});
