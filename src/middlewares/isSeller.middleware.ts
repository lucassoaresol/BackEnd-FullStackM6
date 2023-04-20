import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

export const verifyIsSeller = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.user.role === "SELLER") {
    return next();
  }

  throw new AppError("Missing permissions", 401);
};
