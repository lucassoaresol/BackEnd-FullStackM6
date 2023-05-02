import { Request, Response } from "express";
import {
  createImageUserService,
  createImageAnnouncementService,
} from "../services";

export const createImageUserController = async (
  req: Request,
  res: Response
) => {
  const image = await createImageUserService(req.file, req.params.id);
  return res.status(201).json(image);
};

export const createImageCoverAnnouncementController = async (
  req: Request,
  res: Response
) => {
  const is_cover = true;
  const image = await createImageAnnouncementService(
    req.file,
    req.user.id,
    req.params.id,
    is_cover
  );
  return res.status(201).json(image);
};

export const createImageAnnouncementController = async (
  req: Request,
  res: Response
) => {
  const image = await createImageAnnouncementService(
    req.file,
    req.user.id,
    req.params.id
  );
  return res.status(201).json(image);
};
