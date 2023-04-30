import { v2 as cloudinary } from "cloudinary";
import prisma from "../../prisma";
import fs from "node:fs";
import "dotenv/config";
import { AppError } from "../../errors";

export const createImageService = async (
  { originalname: name, size, filename: key, path }: Express.Multer.File,
  announcement_id?: string
) => {
  if (!process.env.APP_URL) {
    const upload = await cloudinary.uploader.upload(
      path,
      (error, result) => result
    );
    const image = await prisma.listImage.create({
      data: {
        id: upload.public_id,
        name,
        size,
        key,
        url: upload.url,
        announcement_id,
      },
    });
    fs.unlink(path, (error) => {
      if (error) {
        new AppError(error.message);
      }
    });
    return image;
  }
  const url = `${process.env.APP_URL}/files/${key}`;
  const image = await prisma.listImage.create({
    data: { name, size, key, url },
  });
  return image;
};
