import prisma from "../../prisma";

export const listUserService = async () => {
  const user = await prisma.user.findMany({ include: { address: true } });

  return user;
};
