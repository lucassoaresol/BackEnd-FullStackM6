import { AppError } from "../../errors";
import { IAnnouncementUpdateRequest } from "../../interfaces";
import prisma from "../../prisma";

export const updateAnnouncementService = async (
  id: string,
  data: IAnnouncementUpdateRequest
) => {
  try {
    const announcement = await prisma.announcement.update({
      where: { id },
      data,
    });

    return announcement;
  } catch {
    throw new AppError("announcement not found", 404);
  }
};
