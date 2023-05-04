import { ICommentRequest } from "../../interfaces";
import prisma from "../../prisma";

export const createCommentService = async (
  { comment }: ICommentRequest,
  announcement_id: string,
  user_id: string
) => {
  const commentData = await prisma.listComment.create({
    data: {
      comment,
      announcement_id,
      user_id,
    },
  });

  return commentData;
};
