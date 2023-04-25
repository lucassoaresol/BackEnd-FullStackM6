import { AppError } from "../../errors";
import prisma from "../../prisma";

export const retrieveUserService = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: { id },
  });

  if (!user) {
    throw new AppError("user not found", 404);
  }

  return user;
};
