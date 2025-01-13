/*
  Warnings:

  - You are about to drop the column `status` on the `blogs` table. All the data in the column will be lost.
  - Changed the type of `status` on the `projects` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "ContentStatusVisible" AS ENUM ('draft', 'published', 'archived');

-- CreateEnum
CREATE TYPE "ContentStatusWIP" AS ENUM ('planned', 'wip', 'supported', 'unsupported', 'closed');

-- AlterTable
ALTER TABLE "blogs" DROP COLUMN "status",
ADD COLUMN     "visibility" "ContentStatusVisible" NOT NULL DEFAULT 'draft';

-- AlterTable
ALTER TABLE "projects" ADD COLUMN     "visibility" "ContentStatusVisible" NOT NULL DEFAULT 'draft',
DROP COLUMN "status",
ADD COLUMN     "status" "ContentStatusWIP" NOT NULL;

-- DropEnum
DROP TYPE "ContentStatus";
