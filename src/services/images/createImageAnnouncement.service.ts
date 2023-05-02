import prisma from "../../prisma";
import "dotenv/config";

export const createImageAnnouncementService = async (
  { originalname: name, path, size, filename: key }: Express.Multer.File,
  user_id: string,
  announcement_id: string,
  is_cover?: boolean
) => {
  const url = `${process.env.APP_URL}/files/${key}`;
  const data = {
    name,
    size,
    url,
    key,
    is_cover,
    user_id,
    announcement_id,
  };

  if (!process.env.APP_URL) {
    data.url = path;
  }

  const image = await prisma.listImage.create({
    data,
  });
  return image;
};
