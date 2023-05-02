import { AppError } from "../../errors";
import prisma from "../../prisma";

export const retrieveUserService = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: { id },
    include: {
      address: true,
      profile: true,
      announcements: {
        include: { cover: true, listImage: { include: { image: true } } },
      },
    },
  });

  if (!user) {
    throw new AppError("user not found", 404);
  }

  return user;
};
