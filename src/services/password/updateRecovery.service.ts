import { hashSync } from "bcryptjs";
import { IUpdateRecoveryRequest } from "../../interfaces";
import prisma from "../../prisma";

export const updateRecoveryService = async (
  { password }: IUpdateRecoveryRequest,
  userId: string
) => {
  password = hashSync(password, 10);

  const user = await prisma.user.update({
    where: { id: userId },
    data: { password },
  });

  return user;
};
