import { z } from "zod";

const AddressCreateSchema = z.object({
  zip_code: z.string(),
  state: z.string(),
  city: z.string(),
  street: z.string(),
  number: z.string(),
  complement: z.string().optional(),
});

const AddressReturnSchema = AddressCreateSchema.extend({
  id: z.string(),
  user_id: z.string(),
});

export const UserCreateSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  cpf: z.string(),
  phone: z.string(),
  birthdate: z.string(),
  description: z.string(),
  role: z.enum(["BUYER", "SELLER", "ADMIN"]).optional(),

  address: AddressCreateSchema,
});

export const UserReturnSchema = UserCreateSchema.extend({
  id: z.string(),
  created_at: z.date(),

  address: AddressReturnSchema.omit({ user_id: true }),
}).omit({ password: true });

export const UserUpdateRequestSchema = UserCreateSchema.partial();
export const UserUpdateSchema = UserCreateSchema.partial().required();

export const UserArraySchema = UserReturnSchema.array();
