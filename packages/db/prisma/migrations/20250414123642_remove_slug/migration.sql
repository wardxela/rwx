/*
  Warnings:

  - You are about to drop the column `slug` on the `BlogPost` table. All the data in the column will be lost.
  - Changed the type of `content` on the `BlogPost` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropIndex
DROP INDEX "BlogPost_slug_key";

-- AlterTable
ALTER TABLE "BlogPost" DROP COLUMN "slug",
ADD COLUMN     "image" TEXT,
ADD COLUMN     "isDraft" BOOLEAN NOT NULL DEFAULT true,
DROP COLUMN "content",
ADD COLUMN     "content" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "BlogPostComment" ADD COLUMN     "parentId" TEXT;

-- AddForeignKey
ALTER TABLE "BlogPostComment" ADD CONSTRAINT "BlogPostComment_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "BlogPostComment"("id") ON DELETE CASCADE ON UPDATE CASCADE;
