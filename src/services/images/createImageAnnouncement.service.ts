import prisma from "../../prisma";
import "dotenv/config";

export const createImageAnnouncementService = async (
  { originalname: name, path, size, filename: key }: Express.Multer.File,
  user_id: string,
  announcement_id: string
) => {
  const url = `${process.env.APP_URL}/files/${key}`;
  const data = {
    name,
    size,
    url,
    key,
  };

  if (!process.env.APP_URL) {
    data.url = path;
  }

  const image = await prisma.image.create({ data });
  const { id: image_id } = image;

  await prisma.listImage.create({
    data: { image_id, user_id, announcement_id },
  });

  return image;
};
