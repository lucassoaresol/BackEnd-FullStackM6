import { Request, Response } from "express";
import {
  createImageCoverService,
  createImageProfileService,
  createImageAnnouncementService,
  listImageService,
  deleteImageService,
} from "../services";

export const createImageCoverController = async (
  req: Request,
  res: Response
) => {
  const image = await createImageCoverService(req.file, req.params.id);
  return res.status(201).json(image);
};

export const createImageProfileController = async (
  req: Request,
  res: Response
) => {
  const image = await createImageProfileService(req.file, req.params.id);
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

export const listImageController = async (req: Request, res: Response) => {
  const images = await listImageService();
  return res.json(images);
};

export const deleteImageController = async (req: Request, res: Response) => {
  await deleteImageService(req.params.id);
  return res.status(204).json({});
};
