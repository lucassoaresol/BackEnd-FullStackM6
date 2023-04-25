import { Router } from "express";
import {
  createRecoveryController,
  updateRecoveryController,
} from "../controllers";
import {
  validateSchemaMiddleware,
  verifyRecoveryIsValid,
} from "../middlewares";
import { RecoveryCreateSchema, RecoveryUpdateSchema } from "../schemas";

export const passwordRouter = Router();

passwordRouter.post(
  "",
  validateSchemaMiddleware(RecoveryCreateSchema),
  createRecoveryController
);

passwordRouter.patch(
  "",
  verifyRecoveryIsValid,
  validateSchemaMiddleware(RecoveryUpdateSchema),
  updateRecoveryController
);
