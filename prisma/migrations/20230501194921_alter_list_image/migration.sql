/*
  Warnings:

  - You are about to drop the column `image` on the `list_image` table. All the data in the column will be lost.
  - Added the required column `key` to the `list_image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `list_image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `list_image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `list_image` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "list_image" DROP COLUMN "image",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "is_cover" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_profile" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "key" VARCHAR(200) NOT NULL,
ADD COLUMN     "name" VARCHAR(200) NOT NULL,
ADD COLUMN     "size" INTEGER NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL,
ADD COLUMN     "user_id" TEXT,
ALTER COLUMN "announcement_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "list_image" ADD CONSTRAINT "list_image_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
