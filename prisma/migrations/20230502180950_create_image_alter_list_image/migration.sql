/*
  Warnings:

  - The primary key for the `list_image` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `created_at` on the `list_image` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `list_image` table. All the data in the column will be lost.
  - You are about to drop the column `is_cover` on the `list_image` table. All the data in the column will be lost.
  - You are about to drop the column `is_profile` on the `list_image` table. All the data in the column will be lost.
  - You are about to drop the column `key` on the `list_image` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `list_image` table. All the data in the column will be lost.
  - You are about to drop the column `size` on the `list_image` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `list_image` table. All the data in the column will be lost.
  - Added the required column `image_id` to the `list_image` table without a default value. This is not possible if the table is not empty.
  - Made the column `announcement_id` on table `list_image` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_id` on table `list_image` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "list_image" DROP CONSTRAINT "list_image_pkey",
DROP COLUMN "created_at",
DROP COLUMN "id",
DROP COLUMN "is_cover",
DROP COLUMN "is_profile",
DROP COLUMN "key",
DROP COLUMN "name",
DROP COLUMN "size",
DROP COLUMN "url",
ADD COLUMN     "image_id" TEXT NOT NULL,
ALTER COLUMN "announcement_id" SET NOT NULL,
ALTER COLUMN "user_id" SET NOT NULL,
ADD CONSTRAINT "list_image_pkey" PRIMARY KEY ("announcement_id", "user_id", "image_id");

-- CreateTable
CREATE TABLE "images" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(200) NOT NULL,
    "size" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "key" VARCHAR(200) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT,
    "announcement_id" TEXT,

    CONSTRAINT "images_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "images_key_key" ON "images"("key");

-- CreateIndex
CREATE UNIQUE INDEX "images_user_id_key" ON "images"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "images_announcement_id_key" ON "images"("announcement_id");

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_announcement_id_fkey" FOREIGN KEY ("announcement_id") REFERENCES "announcements"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "list_image" ADD CONSTRAINT "list_image_image_id_fkey" FOREIGN KEY ("image_id") REFERENCES "images"("id") ON DELETE CASCADE ON UPDATE CASCADE;
