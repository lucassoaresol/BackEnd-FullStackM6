import { v2 as cloudinary } from "cloudinary";
import prisma from "../../prisma";
import fs from "node:fs";
import { resolve } from "node:path";
import { promisify } from "util";
import { AppError } from "../../errors";

export const deleteAnnouncementService = async (id: string) => {
  try {
    const announcement = await prisma.announcement.delete({
      where: { id },
      include: { cover: true, listImage: { include: { image: true } } },
    });
    const key = announcement.cover.key;
    if (!process.env.APP_URL) {
      await cloudinary.uploader.destroy(key);
    } else {
      promisify(fs.unlink)(
        resolve(__dirname, "..", "..", "..", "tmp", "uploads", key)
      );
    }
    announcement.listImage.forEach(async ({ image }) => {
      const key = image.key;
      await prisma.image.delete({ where: { key } });
      if (!process.env.APP_URL) {
        await cloudinary.uploader.destroy(key);
      } else {
        promisify(fs.unlink)(
          resolve(__dirname, "..", "..", "..", "tmp", "uploads", key)
        );
      }
    });
  } catch {
    throw new AppError("announcement not found", 404);
  }
};
