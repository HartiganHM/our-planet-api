import { PrismaClient } from '@prisma/client';
import continentsData from './continents';

const prisma = new PrismaClient();

async function main() {
  continentsData.forEach(async (continent) => {
    await prisma.continent.create({
      data: continent,
    });
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
