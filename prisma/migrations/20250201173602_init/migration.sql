-- CreateTable
CREATE TABLE "Continent" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "bio" TEXT NOT NULL,

    CONSTRAINT "Continent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Animal" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "population" TEXT NOT NULL,
    "scientific_name" TEXT NOT NULL,
    "height" TEXT NOT NULL,
    "weight" TEXT NOT NULL,
    "length" TEXT NOT NULL,
    "habitat" TEXT NOT NULL,
    "facts" TEXT NOT NULL,
    "human_benefit" TEXT NOT NULL,
    "continent_id" INTEGER NOT NULL,

    CONSTRAINT "Animal_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Continent_name_key" ON "Continent"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Animal_name_key" ON "Animal"("name");

-- AddForeignKey
ALTER TABLE "Animal" ADD CONSTRAINT "Animal_continent_id_fkey" FOREIGN KEY ("continent_id") REFERENCES "Continent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
