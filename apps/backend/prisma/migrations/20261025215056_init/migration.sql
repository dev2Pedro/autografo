-- CreateEnum
CREATE TYPE "transformer_phase" AS ENUM ('MONO', 'TRI');

-- CreateTable
CREATE TABLE "transformers" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "power_kva" DECIMAL(10,2) NOT NULL,
    "primary_voltage" DECIMAL(10,2) NOT NULL,
    "secondary_voltage" DECIMAL(10,2) NOT NULL,
    "phases" "transformer_phase" NOT NULL,
    "height_mm" DECIMAL(10,2),
    "width_mm" DECIMAL(10,2),
    "depth_mm" DECIMAL(10,2),
    "bushing_count" INTEGER,
    "radiator_count" INTEGER,
    "has_tank" BOOLEAN NOT NULL DEFAULT false,
    "has_conservator" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "transformers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "drawings" (
    "id" SERIAL NOT NULL,
    "transformer_id" INTEGER NOT NULL,
    "format" VARCHAR(20) NOT NULL,
    "svg" TEXT,
    "version" INTEGER NOT NULL DEFAULT 1,
    "status" VARCHAR(20) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "drawings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "drawing_versions" (
    "id" SERIAL NOT NULL,
    "drawing_id" INTEGER NOT NULL,
    "version" INTEGER NOT NULL,
    "parameters" JSONB NOT NULL,
    "svg" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "drawing_versions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "drawings_transformer_id_idx" ON "drawings"("transformer_id");

-- CreateIndex
CREATE UNIQUE INDEX "drawings_transformer_id_version_key" ON "drawings"("transformer_id", "version");

-- CreateIndex
CREATE INDEX "drawing_versions_drawing_id_idx" ON "drawing_versions"("drawing_id");

-- CreateIndex
CREATE UNIQUE INDEX "drawing_versions_drawing_id_version_key" ON "drawing_versions"("drawing_id", "version");

-- AddForeignKey
ALTER TABLE "drawings" ADD CONSTRAINT "drawings_transformer_id_fkey" FOREIGN KEY ("transformer_id") REFERENCES "transformers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "drawing_versions" ADD CONSTRAINT "drawing_versions_drawing_id_fkey" FOREIGN KEY ("drawing_id") REFERENCES "drawings"("id") ON DELETE CASCADE ON UPDATE CASCADE;
