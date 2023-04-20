import { Router } from "express";
import {
  createAnnouncementController,
  deleteAnnouncementController,
  listAnnouncementController,
  retrieveAnnouncementController,
  updateAnnouncementController,
} from "../controllers";

import {
  validateSchemaMiddleware,
  verifyAnnouncementOwner,
  verifyIsSeller,
  verifyUserIsAuthenticated,
} from "../middlewares";

import { AnnouncementCreateSchema, AnnouncementUpdateSchema } from "../schemas";

export const announcementRouter = Router();

announcementRouter.post(
  "/:id",
  verifyUserIsAuthenticated,
  verifyIsSeller,
  validateSchemaMiddleware(AnnouncementCreateSchema),
  createAnnouncementController
);
announcementRouter.get("", listAnnouncementController);
announcementRouter.get("/:id", retrieveAnnouncementController);
announcementRouter.patch(
  "/:id",
  verifyUserIsAuthenticated,
  verifyAnnouncementOwner,
  validateSchemaMiddleware(AnnouncementUpdateSchema),
  updateAnnouncementController
);
announcementRouter.delete(
  "/:id",
  verifyUserIsAuthenticated,
  verifyAnnouncementOwner,
  deleteAnnouncementController
);
