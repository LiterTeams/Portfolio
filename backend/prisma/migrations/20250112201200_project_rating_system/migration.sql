-- CreateEnum
CREATE TYPE "ProjectRatingSystem" AS ENUM ('G', 'PG', 'PG13', 'R', 'NC17');

-- AlterTable
ALTER TABLE "projects" ADD COLUMN     "PRS" "ProjectRatingSystem" NOT NULL DEFAULT 'G',
ADD COLUMN     "version" TEXT NOT NULL DEFAULT '0.0.1';
