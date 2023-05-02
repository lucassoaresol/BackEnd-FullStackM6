import { v2 as cloudinary } from "cloudinary";
import prisma from "../../prisma";
import fs from "node:fs";
import { resolve } from "node:path";
import { promisify } from "util";
import { AppError } from "../../errors";

export const deleteUserService = async (id: string) => {
  try {
    const user = await prisma.user.delete({
      where: { id },
      include: {
        profile: true,
        announcements: { include: { cover: true } },
        listImage: { include: { image: true } },
      },
    });
    const key = user.profile.key;
    if (!process.env.APP_URL) {
      await cloudinary.uploader.destroy(key);
    } else {
      promisify(fs.unlink)(
        resolve(__dirname, "..", "..", "..", "tmp", "uploads", key)
      );
    }
    user.announcements.forEach(async ({ cover }) => {
      const key = cover.key;
      if (!process.env.APP_URL) {
        await cloudinary.uploader.destroy(key);
      } else {
        promisify(fs.unlink)(
          resolve(__dirname, "..", "..", "..", "tmp", "uploads", key)
        );
      }
    });
    user.listImage.forEach(async ({ image }) => {
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
    throw new AppError("user not found", 404);
  }
};
