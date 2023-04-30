import { Router } from "express";
import { AnnouncementCreateSchema, AnnouncementUpdateSchema } from "../schemas";
import {
  createAnnouncementController,
  createImageController,
  deleteAnnouncementController,
  deleteImageController,
  listAnnouncementController,
  listImageController,
  retrieveAnnouncementController,
  updateAnnouncementController,
} from "../controllers";
import {
  validateSchemaMiddleware,
  verifyAnnouncementOwner,
  verifyIsSeller,
  verifyUserIsAuthenticated,
} from "../middlewares";
import { upload } from "../libs";

export const announcementRouter = Router();

announcementRouter.post(
  "",
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

export const imageRouter = Router();

imageRouter.post(
  "",
  verifyUserIsAuthenticated,
  verifyIsSeller,
  upload.single("image"),
  createImageController
);
imageRouter.get("/:id", listImageController);
imageRouter.delete(
  "/:id",
  verifyUserIsAuthenticated,
  verifyIsSeller,
  deleteImageController
);
