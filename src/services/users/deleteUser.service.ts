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
      include: { listImage: true },
    });
    user.listImage.forEach(async ({ key }) => {
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
