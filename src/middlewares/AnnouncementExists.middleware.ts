import { Request, Response, NextFunction } from "express";
import prisma from "../prisma";
import { AppError } from "../errors";

export const verifyAnnouncementExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  const announcement = await prisma.announcement.findUnique({
    where: { id },
  });

  if (!announcement || !announcement.is_active) {
    throw new AppError("Announcement not found", 404);
  }

  return next();
};
