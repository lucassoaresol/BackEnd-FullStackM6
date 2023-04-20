import { Request, Response } from "express";
import { loginUserService } from "../services/session";

export const loginUserController = async (req: Request, res: Response) => {
  const userLogin = await loginUserService(req.body);

  return res.status(200).json(userLogin);
};
