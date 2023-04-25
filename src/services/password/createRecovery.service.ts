import "dotenv/config";
import jwt from "jsonwebtoken";
import { AppError } from "../../errors";
import prisma from "../../prisma";
import { ICreateRecoveryRequest } from "../../interfaces";

export const createRecoveryService = async ({
  email,
}: ICreateRecoveryRequest): Promise<{ token: string }> => {
  const user = await prisma.user.findFirst({
    where: { email },
  });

  if (!user) {
    throw new AppError("user not found", 404);
  }

  const token = jwt.sign({}, process.env.SECRET_KEY!, {
    subject: user.id,
    expiresIn: 600,
  });

  return { token: token };
};
