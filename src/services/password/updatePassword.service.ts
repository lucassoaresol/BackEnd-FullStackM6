import { compareSync, hashSync } from "bcryptjs";
import { IUpdatePasswordRequest } from "../../interfaces";
import prisma from "../../prisma";
import { AppError } from "../../errors";

export const updatePasswordService = async (
  { oldPassword, password }: IUpdatePasswordRequest,
  userId: string
) => {
  const userFind = await prisma.user.findUnique({
    where: { id: userId },
  });

  const passwordMatch = compareSync(oldPassword, userFind.password);

  if (!passwordMatch) {
    throw new AppError("incorrect password", 404);
  }

  password = hashSync(password, 10);

  const user = await prisma.user.update({
    where: { id: userId },
    data: { password },
  });

  return user;
};
