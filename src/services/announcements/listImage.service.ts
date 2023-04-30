import prisma from "../../prisma";

export const listImageService = async (id: string) => {
  const images = await prisma.listImage.findMany({
    where: { announcement_id: id },
  });
  return images;
};
