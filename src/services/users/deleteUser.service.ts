import { AppError } from "../../errors";
import prisma from "../../prisma";

export const deleteUserService = async (id: string) => {
  try {
    await prisma.user.delete({
      where: { id },
    });
  } catch {
    throw new AppError("user not found", 404);
  }
};
