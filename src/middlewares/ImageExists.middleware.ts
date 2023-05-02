import { Request, Response, NextFunction } from "express";
import prisma from "../prisma";
import { AppError } from "../errors";

export const verifyImageExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  const image = await prisma.image.findFirst({
    where: { OR: [{ announcement_id: id }, { user_id: id }] },
  });

  if (image) {
    throw new AppError("Image already exists", 409);
  }

  return next();
};
