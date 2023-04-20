import { AppError } from "../../errors";
import prisma from "../../prisma";

export const deleteUserService = async (id: string) => {
  try {
    await prisma.user.update({
      where: { id },
      data: {
        is_active: false,
        announcement: {
          updateMany: {
            where: { is_active: true },
            data: { is_active: false },
          },
        },
      },
    });
  } catch {
    throw new AppError("user not found", 404);
  }
};
