import prisma from "../../prisma";
import "dotenv/config";

export const createImageUserService = async (
  { originalname: name, path, size, filename: key }: Express.Multer.File,
  user_id: string
) => {
  const data = {
    name,
    size,
    url: path,
    key,
    is_profile: true,
    user_id,
  };

  if (!process.env.APP_URL) {
    const image = await prisma.listImage.create({
      data,
    });
    return image;
  }

  const url = `${process.env.APP_URL}/files/${key}`;
  data.url = url;

  const image = await prisma.listImage.create({
    data,
  });

  return image;
};
