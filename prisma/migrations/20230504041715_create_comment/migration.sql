-- CreateTable
CREATE TABLE "list_comment" (
    "id" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "announcement_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "list_comment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "list_comment" ADD CONSTRAINT "list_comment_announcement_id_fkey" FOREIGN KEY ("announcement_id") REFERENCES "announcements"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "list_comment" ADD CONSTRAINT "list_comment_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
