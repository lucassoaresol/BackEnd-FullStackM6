import { AppError } from "../../errors";
import prisma from "../../prisma";

export const retrieveAnnouncementService = async (id: string) => {
  const announcement = await prisma.announcement.findUnique({
    where: { id },
    include: {
      user: { include: { profile: true } },
      cover: true,
      listImage: { include: { image: true } },
      listComment: { include: { user: { include: { profile: true } } } },
    },
  });

  if (!announcement) {
    throw new AppError("announcement not found", 404);
  }

  return announcement;
};
