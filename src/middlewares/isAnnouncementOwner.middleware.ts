import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";
import prisma from "../prisma";

export const verifyAnnouncementOwner = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;

  const announcements = await prisma.announcement.findFirst({
    where: { id },
  });

  if (announcements?.user_id === id) {
    return next();
  }

  throw new AppError("Missing permissions", 401);
};
