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
    listImage,
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

  listImage.forEach(async ({ id }) => {
    await prisma.listImage.update({
      where: { id },
      data: { announcement_id: announcement.id },
    });
  });

  return announcement;
};
