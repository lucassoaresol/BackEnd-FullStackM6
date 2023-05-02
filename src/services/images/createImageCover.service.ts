import prisma from "../../prisma";
import "dotenv/config";

export const createImageCoverService = async (
  { originalname: name, path, size, filename: key }: Express.Multer.File,
  announcement_id: string
) => {
  const data = {
    name,
    size,
    url: path,
    key,
    announcement_id,
  };

  if (!process.env.APP_URL) {
    const image = await prisma.image.create({
      data,
    });
    return image;
  }

  const url = `${process.env.APP_URL}/files/${key}`;
  data.url = url;

  const image = await prisma.image.create({
    data,
  });

  return image;
};
