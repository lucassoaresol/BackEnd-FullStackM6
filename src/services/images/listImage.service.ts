import prisma from "../../prisma";

export const listImageService = async () => {
  const images = await prisma.image.findMany({});
  return images;
};
