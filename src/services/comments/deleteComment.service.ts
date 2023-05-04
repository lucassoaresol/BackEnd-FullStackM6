import { AppError } from "../../errors";
import prisma from "../../prisma";

export const deleteCommentService = async (id: string) => {
  try {
    await prisma.listComment.delete({
      where: { id },
    });
  } catch {
    throw new AppError("comment not found", 404);
  }
};
