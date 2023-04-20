import prisma from "../../prisma";
import { IUserRequest } from "../../interfaces/users.interfaces";
import { hashSync } from "bcryptjs";
import { AppError } from "../../errors";

export const createUserService = async ({
  name,
  email,
  password,
  cpf,
  phone,
  birthdate,
  description,
  role,
  address,
}: IUserRequest) => {
  let user = await prisma.user.findFirst({
    where: { OR: [{ email }, { cpf }] },
  });

  if (user) {
    throw new AppError("user already exists", 409);
  }
  password = hashSync(password, 10);

  !role ? "BUYER" : role;

  user = await prisma.user.create({
    data: {
      name,
      email,
      password,
      cpf,
      phone,
      birthdate,
      description,
      role,
      address: { create: { ...address } },
    },
    include: { address: true },
  });

  return user;
};
