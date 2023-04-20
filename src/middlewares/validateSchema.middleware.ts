import { ZodTypeAny } from "zod/lib";
import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

export const validateSchemaMiddleware =
  (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction) => {
    try {
      const bodyValidated = schema.parse(req.body);

      req.body = bodyValidated;

      return next();
    } catch (error) {
      console.log(error);
    }
  };
