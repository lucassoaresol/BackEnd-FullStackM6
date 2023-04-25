import { Request, Response } from "express";
import {
  createRecoveryService,
  updatePasswordService,
  updateRecoveryService,
} from "../services";

export const createRecoveryController = async (req: Request, res: Response) => {
  const token = await createRecoveryService(req.body);

  return res.status(201).json(token);
};

export const updateRecoveryController = async (req: Request, res: Response) => {
  const user = await updateRecoveryService(req.body, req.user.id);

  return res.status(200).json(user);
};

export const updatePasswordController = async (req: Request, res: Response) => {
  const user = await updatePasswordService(req.body, req.user.id);

  return res.status(200).json(user);
};
