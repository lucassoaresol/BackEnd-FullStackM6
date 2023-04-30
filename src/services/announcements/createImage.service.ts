import prisma from "../../prisma";
import "dotenv/config";

export const createImageService = async (
  { filename: id, size, path }: Express.Multer.File,
  user_id: string,
  announcement_id?: string
) => {
  if (!process.env.APP_URL) {
    const image = await prisma.listImage.create({
      data: {
        id,
        size,
        url: path,
        announcement_id,
        user_id,
      },
    });
    return image;
  }
  const url = `${process.env.APP_URL}/files/${id}`;
  const image = await prisma.listImage.create({
    data: { name: id, size, url, announcement_id, user_id },
  });
  return image;
};
