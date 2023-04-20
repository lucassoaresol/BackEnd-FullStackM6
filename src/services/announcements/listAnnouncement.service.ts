import prisma from "../../prisma";

export const listAnnouncementService = async () => {
  const announcements = await prisma.announcement.findMany({});

  return announcements;
};
