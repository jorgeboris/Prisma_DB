const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.explorer.upsert({
      where: { name: 'Woopa' },
      update: {},
      create: {
        name: 'Woopa',
				username: 'ajolonauta',
				mission: 'Node'
      },
    });

    const woopa1 = await prisma.explorer.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa1',
				username: 'ajolonauta1',
				mission: 'Node'
      },
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: 'Woopa 2' },
      update: {},
      create: {
        name: 'Woopa 2',
				username: 'ajolonauta2',
				mission: 'Java'
      },
    });

    const woopa3 = await prisma.explorer.upsert({
      where: { name: 'Woopa 3' },
      update: {},
      create: {
        name: 'Woopa 3',
				username: 'ajolonauta3',
				mission: 'Node'
      },
    });

    const woopa4 = await prisma.explorer.upsert({
        where: { name: 'Woopa4' },
        update: {},
        create: {
            name: 'Woopa4',
            username: 'ajolonauta4',
            mission: 'Java'
        }
    });

    const voryz = await prisma.explorer.upsert({
        where: { name: 'Voryz' },
        update: {},
        create: {
            name: 'Voryz',
            username: 'boricuas',
            mission: 'Node'
        }
    });

    const alex = await prisma.explorerData.upsert({
        where: { name: 'Alex' },
        update: {},
        create: {
            name: 'Alex',
            lang: 'Spanish',
            missionCommander: 'Carlo',
            enrollments: 2
        }
    });

    const jose = await prisma.explorerData.upsert({
        where: { name: 'Jose' },
        update: {},
        create: {
            name: 'Jose',
            lang: 'English',
            missionCommander: 'Fernanda',
            enrollments: 1
        }
    });



    console.log('Create 6 explorers');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();