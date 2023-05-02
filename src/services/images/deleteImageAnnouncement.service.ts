import { v2 as cloudinary } from "cloudinary";
import prisma from "../../prisma";
import fs from "node:fs";
import { resolve } from "node:path";
import { promisify } from "util";

export const deleteImageAnnouncementService = async (id: string) => {
  if (!process.env.APP_URL) {
    const { key } = await prisma.listImage.delete({
      where: { id },
    });
    await cloudinary.uploader.destroy(key);
  } else {
    const { key } = await prisma.listImage.delete({
      where: { id },
    });
    promisify(fs.unlink)(
      resolve(__dirname, "..", "..", "..", "tmp", "uploads", key)
    );
  }
};
