import { Router } from "express";
import { loginUserController } from "../controllers/session.controllers";

export const sessionRouter = Router();

sessionRouter.post("/", loginUserController);
