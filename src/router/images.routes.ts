import { Router } from "express";
import { verifyIsSeller, verifyUserIsAuthenticated } from "../middlewares";
import { upload } from "../libs";
import {
  createImageAnnouncementController,
  createImageCoverAnnouncementController,
  createImageUserController,
} from "../controllers";

export const imageRouter = Router();

imageRouter.post(
  "/user/:id",
  upload.single("image"),
  createImageUserController
);

imageRouter.post(
  "/announcement/:id/cover",
  verifyUserIsAuthenticated,
  verifyIsSeller,
  upload.single("image"),
  createImageCoverAnnouncementController
);

imageRouter.post(
  "/announcement/:id",
  verifyUserIsAuthenticated,
  verifyIsSeller,
  upload.single("image"),
  createImageAnnouncementController
);
