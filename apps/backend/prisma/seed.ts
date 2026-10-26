import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const transformers: Prisma.TransformerCreateInput[] = [
  {
    name: 'Transformador 500 kVA',
    powerKva: 500,
    primaryVoltage: 13800,
    secondaryVoltage: 380,
    phases: 'TRI',
    widthMm: 900,
    heightMm: 1200,
    depthMm: 700,
    bushingCount: 6,
    radiatorCount: 4,
    hasTank: true,
    hasConservator: false,
  },
  {
    name: 'Transformador 750 kVA',
    powerKva: 750,
    primaryVoltage: 13800,
    secondaryVoltage: 380,
    phases: 'TRI',
    widthMm: 1000,
    heightMm: 1300,
    depthMm: 800,
    bushingCount: 6,
    radiatorCount: 5,
    hasTank: true,
    hasConservator: true,
  },
  {
    name: 'Transformador 1000 kVA',
    powerKva: 1000,
    primaryVoltage: 13800,
    secondaryVoltage: 380,
    phases: 'TRI',
    widthMm: 1100,
    heightMm: 1400,
    depthMm: 900,
    bushingCount: 6,
    radiatorCount: 6,
    hasTank: true,
    hasConservator: true,
  },
];

// `name` não é único no schema, então o upsert não se aplica:
// busca por nome e atualiza se existir, senão cria.
async function main(): Promise<void> {
  for (const data of transformers) {
    const existing = await prisma.transformer.findFirst({
      where: { name: data.name },
      select: { id: true },
    });

    if (existing) {
      await prisma.transformer.update({ where: { id: existing.id }, data });
    } else {
      await prisma.transformer.create({ data });
    }
  }

  const total = await prisma.transformer.count();
  console.log(`Seed concluído: ${total} transformadores no banco.`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
