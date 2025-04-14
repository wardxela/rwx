/*
  Warnings:

  - You are about to drop the column `isDraft` on the `BlogPost` table. All the data in the column will be lost.
  - You are about to drop the column `publishedAt` on the `BlogPost` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "BlogPost" DROP COLUMN "isDraft",
DROP COLUMN "publishedAt";
