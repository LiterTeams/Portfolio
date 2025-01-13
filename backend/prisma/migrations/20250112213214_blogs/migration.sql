-- AlterTable
ALTER TABLE "projects" ALTER COLUMN "version" DROP NOT NULL,
ALTER COLUMN "version" SET DEFAULT 'unknown';
