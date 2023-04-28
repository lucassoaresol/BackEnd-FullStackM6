import { Request, Response } from "express";
import {
  updatePasswordService,
  sendEmailRecoveryService,
} from "../services/password/";

export const updatePasswordController = async (req: Request, res: Response) => {
  const user = await updatePasswordService(
    req.body,
    req.params.userId,
    req.params.token
  );

  return res.status(200).json(user);
};

export const sendEmailToRecovery = async (req: Request, res: Response) => {
  const user = await sendEmailRecoveryService(req.body);

  return res.status(200).json(user);
};
