import { v2 as cloudinary } from "cloudinary";
import prisma from "../../prisma";
import fs from "node:fs";
import { resolve } from "node:path";
import { promisify } from "util";

export const deleteImageService = async (id: string) => {
  if (!process.env.APP_URL) {
    await cloudinary.uploader.destroy(id);
    await prisma.listImage.delete({
      where: { id },
    });
  } else {
    const image = await prisma.listImage.delete({
      where: { id },
    });
    promisify(fs.unlink)(
      resolve(__dirname, "..", "..", "..", "tmp", "uploads", image.name)
    );
  }
};
