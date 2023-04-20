import { AppError } from "../../errors";
import prisma from "../../prisma";

export const retrieveAnnouncementService = async (id: string) => {
  const announcement = await prisma.announcement.findUnique({
    where: { id },
  });

  if (!announcement) {
    throw new AppError("announcement not found", 404);
  }

  return announcement;
};
