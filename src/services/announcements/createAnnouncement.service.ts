import { IAnnouncementRequest } from "../../interfaces";
import prisma from "../../prisma";

export const createAnnouncementService = async (
  {
    brand,
    model,
    manufacture_year,
    fuel,
    mileage,
    color,
    price_fipe,
    price,
    description,
  }: IAnnouncementRequest,
  user_id: string
) => {
  const announcement = await prisma.announcement.create({
    data: {
      brand,
      model,
      manufacture_year,
      fuel,
      mileage,
      color,
      price_fipe,
      price,
      description,
      user_id,
    },
  });

  return announcement;
};
