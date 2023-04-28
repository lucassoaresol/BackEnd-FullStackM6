import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares";
import { sendEmailToRecovery, updatePasswordController } from "../controllers";
import { PasswordUpdateSchema, RecoveryPasswordEmailSchema } from "../schemas";

export const passwordRouter = Router();

passwordRouter.post(
  "",
  validateSchemaMiddleware(RecoveryPasswordEmailSchema),
  sendEmailToRecovery
);

passwordRouter.post(
  "/:userId/:token",
  validateSchemaMiddleware(PasswordUpdateSchema),
  updatePasswordController
);
