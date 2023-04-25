import { hashSync } from "bcryptjs";
import { AppError } from "../../errors";
import { IUserUpdateRequest } from "../../interfaces";
import prisma from "../../prisma";

export const updateUserService = async (
  id: string,
  {
    name,
    email,
    password,
    phone,
    birthdate,
    description,
    role,
    address,
  }: IUserUpdateRequest
) => {
  if (password) {
    password = hashSync(password, 10);
  }
  if (email) {
    const user = await prisma.user.findUnique({ where: { email } });
    if (user) {
      throw new AppError(`${email} already exists`, 409);
    }
  }
  if (role === "ADMIN") {
    throw new AppError("not allowed to change role to ADMIN", 403);
  }
  try {
    const user = await prisma.user.update({
      where: { id },
      data: {
        name,
        email,
        password,
        phone,
        birthdate,
        description,
        role,
        address: { update: { ...address } },
      },
      include: { address: true },
    });

    return user;
  } catch {
    throw new AppError("user not found", 404);
  }
};
