import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const alice = await prisma.user.upsert({
    where: { email: 'alice@onboarding.io' },
    update: {},
    create: {
      email: 'alice@onboarding.io',
      firstName: 'alice',
      lastName: 'smith',
      posts: {
        create: {
          title: 'The Tale of Two Cities',
          content: "It's the best time and the worst time",
        },
      },
    },
  });
  const bob = await prisma.user.upsert({
    where: { email: 'bob@onboarding.io' },
    update: {},
    create: {
      email: 'bob@onboarding.io',
      firstName: 'bob',
      lastName: 'smith',
      posts: {
        create: {
          title: 'Moby Dick',
          content: 'A giant whale',
        },
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
