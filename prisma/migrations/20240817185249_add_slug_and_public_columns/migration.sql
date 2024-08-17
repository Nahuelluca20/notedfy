/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `notes` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `notes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "notes" ADD COLUMN     "public" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "notes_slug_key" ON "notes"("slug");
