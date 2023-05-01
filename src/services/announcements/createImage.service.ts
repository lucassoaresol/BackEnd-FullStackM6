import prisma from "../../prisma";
import "dotenv/config";

export const createImageService = async (
  { originalname: name, path, size, filename: key }: Express.Multer.File,
  user_id: string,
  announcement_id?: string
) => {
  if (!process.env.APP_URL) {
    const image = await prisma.listImage.create({
      data: {
        name,
        size,
        url: path,
        key,
        announcement_id,
        user_id,
      },
    });
    return image;
  }
  const url = `${process.env.APP_URL}/files/${key}`;
  const image = await prisma.listImage.create({
    data: { name, size, url, key, announcement_id, user_id },
  });
  return image;
};
