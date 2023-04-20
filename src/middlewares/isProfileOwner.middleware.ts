import { Request, Response, NextFunction } from "express";
import { verifyIsAdmin } from "./isAdmin.middleware";

export const verifyProfileOwner = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.user.id === req.params.id) {
    return next();
  }

  return verifyIsAdmin(req, res, next);
};
