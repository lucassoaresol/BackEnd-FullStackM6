import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";

export const verifyProfileOwner = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.user.id === req.params.id) {
    return next();
  }

  throw new AppError("Missing permissions", 401);
};
