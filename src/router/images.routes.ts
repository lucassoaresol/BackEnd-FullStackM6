import { Router } from "express";
import {
  verifyImageExists,
  verifyIsSeller,
  verifyUserIsAuthenticated,
} from "../middlewares";
import { upload } from "../libs";
import {
  createImageAnnouncementController,
  createImageProfileController,
  createImageCoverController,
  listImageController,
  deleteImageController,
} from "../controllers";

export const imageRouter = Router();

imageRouter.post(
  "/user/:id",
  verifyImageExists,
  upload.single("image"),
  createImageProfileController
);

imageRouter.post(
  "/announcement/:id/cover",
  verifyUserIsAuthenticated,
  verifyIsSeller,
  verifyImageExists,
  upload.single("image"),
  createImageCoverController
);

imageRouter.post(
  "/announcement/:id",
  verifyUserIsAuthenticated,
  verifyIsSeller,
  upload.single("image"),
  createImageAnnouncementController
);

imageRouter.get("", listImageController);

imageRouter.delete("/:id", deleteImageController);
