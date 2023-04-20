import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

export const verifyIsBuyer = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.user.role === "BUYER") {
    return next();
  }

  throw new AppError("Missing permissions", 401);
};
