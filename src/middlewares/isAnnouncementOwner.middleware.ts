import { Request, Response, NextFunction } from "express";
import prisma from "../prisma";
import { verifyIsAdmin } from "./isAdmin.middleware";

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

  return verifyIsAdmin(req, res, next);
};
