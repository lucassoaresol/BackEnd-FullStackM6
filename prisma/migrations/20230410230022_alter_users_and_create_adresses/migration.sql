/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cpf]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `birthdate` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cpf` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('BUYER', 'SELLER', 'ADMIN');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "birthdate" VARCHAR(50) NOT NULL,
ADD COLUMN     "cpf" VARCHAR(11) NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "email" VARCHAR(254) NOT NULL,
ADD COLUMN     "is_active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "password" VARCHAR(128) NOT NULL,
ADD COLUMN     "phone" VARCHAR(20) NOT NULL,
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'BUYER';

-- CreateTable
CREATE TABLE "adresses" (
    "id" TEXT NOT NULL,
    "zip_code" VARCHAR(8) NOT NULL,
    "state" VARCHAR(150) NOT NULL,
    "city" VARCHAR(150) NOT NULL,
    "street" VARCHAR(150) NOT NULL,
    "number" VARCHAR(10) NOT NULL,
    "complement" VARCHAR(150),
    "user_id" TEXT NOT NULL,

    CONSTRAINT "adresses_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "adresses_user_id_key" ON "adresses"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_cpf_key" ON "users"("cpf");

-- AddForeignKey
ALTER TABLE "adresses" ADD CONSTRAINT "adresses_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
