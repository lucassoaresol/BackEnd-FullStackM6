import { AppError } from "../../errors";
import prisma from "../../prisma";

export const deleteAnnouncementService = async (id: string) => {
  try {
    await prisma.announcement.delete({
      where: { id },
    });
  } catch {
    throw new AppError("announcement not found", 404);
  }
};
