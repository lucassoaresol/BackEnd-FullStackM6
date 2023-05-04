import { z } from "zod";

export const AnnouncementCreateSchema = z.object({
  brand: z.string(),
  model: z.string(),
  manufacture_year: z.string(),
  fuel: z.string(),
  mileage: z.number(),
  color: z.string(),
  price_fipe: z.string(),
  price: z.string(),
  description: z.string(),
  is_active: z.string().optional(),
});

export const CommentCreateSchema = z.object({
  comment: z.string(),
});

export const AnnouncementReturnSchema = AnnouncementCreateSchema.extend({
  id: z.string(),

  created_at: z.date(),

  user: z.object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
    cpf: z.string(),
    phone: z.string(),
    birthdate: z.string(),
    description: z.string(),
    is_active: z.string(),

    address: z.object({
      cep: z.string(),
      state: z.string(),
      city: z.string(),
      street: z.string(),
      number: z.number(),
      complement: z.string(),
    }),
  }),
});

export const AnnouncementUpdateRequestSchema =
  AnnouncementCreateSchema.partial();
export const AnnouncementUpdateSchema =
  AnnouncementCreateSchema.partial().required();

export const AnnouncementArraySchema = AnnouncementReturnSchema.array();
