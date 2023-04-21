import { Request, Response, NextFunction } from "express";
import prisma from "../prisma";
import { AppError } from "../errors";

export const verifyUserExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  const user = await prisma.user.findUnique({
    where: { id },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  return next();
};
