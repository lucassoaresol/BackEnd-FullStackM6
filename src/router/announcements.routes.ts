import { Router } from "express";
import {
  AnnouncementCreateSchema,
  AnnouncementUpdateSchema,
  CommentCreateSchema,
} from "../schemas";
import {
  createAnnouncementController,
  createCommentController,
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

export const commentRouter = Router();

commentRouter.post(
  "/:id",
  verifyUserIsAuthenticated,
  validateSchemaMiddleware(CommentCreateSchema),
  createCommentController
);
