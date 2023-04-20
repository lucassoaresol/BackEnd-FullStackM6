import { Response } from "express";
import { Request } from "express";
import {
  createAnnouncementService,
  deleteAnnouncementService,
  listAnnouncementService,
  listAnnouncementWithUserService,
  retrieveAnnouncementService,
  updateAnnouncementService,
} from "../services/announcements";

export const createAnnouncementController = async (
  req: Request,
  res: Response
) => {
  const announcement = await createAnnouncementService(req.body, req.params.id);
  return res.status(201).json(announcement);
};

export const listAnnouncementController = async (
  req: Request,
  res: Response
) => {
  const announcements = await listAnnouncementService();
  return res.json(announcements);
};

export const listAnnouncementWithUserController = async (
  req: Request,
  res: Response
) => {
  const announcements = await listAnnouncementWithUserService(req.params.id);
  return res.json(announcements);
};

export const retrieveAnnouncementController = async (
  req: Request,
  res: Response
) => {
  const announcement = await retrieveAnnouncementService(req.params.id);
  return res.json(announcement);
};

export const updateAnnouncementController = async (
  req: Request,
  res: Response
) => {
  const announcement = await updateAnnouncementService(req.params.id, req.body);
  return res.json(announcement);
};

export const deleteAnnouncementController = async (
  req: Request,
  res: Response
) => {
  await deleteAnnouncementService(req.params.id);
  return res.status(204).json({});
};
