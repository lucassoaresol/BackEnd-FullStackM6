import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listAnnouncementWithUserController,
  listUserController,
  profileUserController,
  retrieveUserController,
  updateUserController,
} from "../controllers";
import {
  validateSchemaMiddleware,
  verifyProfileOwner,
  verifyUserIsAuthenticated,
} from "../middlewares";
import { UserCreateSchema, UserUpdateRequestSchema } from "../schemas";

export const userRouter = Router();

userRouter.post(
  "",
  validateSchemaMiddleware(UserCreateSchema),
  createUserController
);
userRouter.get("", listUserController);
userRouter.get("/:id", retrieveUserController);
userRouter.get(
  "/profile",
  verifyUserIsAuthenticated,
  profileUserController
);

userRouter.patch(
  "/:id",
  verifyUserIsAuthenticated,
  verifyProfileOwner,
  validateSchemaMiddleware(UserUpdateRequestSchema),
  updateUserController
);

userRouter.delete(
  "/:id",
  verifyUserIsAuthenticated,
  verifyProfileOwner,
  deleteUserController
);

userRouter.get(
  "/:id/announcements",
  verifyUserIsAuthenticated,
  listAnnouncementWithUserController
);
