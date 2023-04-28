import { z } from "zod";

export const RecoveryPasswordEmailSchema = z.object({
  email: z.string().email(),
});
export const PasswordUpdateSchema = z.object({ password: z.string() });
