/*
  Warnings:

  - Added the required column `token` to the `token` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "token" ADD COLUMN     "token" VARCHAR(200) NOT NULL;
