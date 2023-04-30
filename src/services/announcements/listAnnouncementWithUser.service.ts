import prisma from "../../prisma";

export const listAnnouncementWithUserService = async (user_id: string) => {
  const announcements = await prisma.announcement.findMany({
    where: { user_id },
    include: { user: true, listImage: true },
  });

  return announcements;
};
