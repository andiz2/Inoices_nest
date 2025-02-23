// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
    // create some dummy users
    const user1 = await prisma.user.upsert({
        where: { id: 1 },
        update: {},
        create: {
            email: 'test1@email1.com',
            password: 'changeme',
            name: "Test User 1",
        },
    });

    const user2 = await prisma.user.upsert({
        where: { id: 2 },
        update: {},
        create: {
            email: 'test2@email2.com',
            password: 'guess',
            name: "Test User 2",
        },
    });



    console.log({ user1, user2 });
}

// execute the main function
main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        // close Prisma Client at the end
        await prisma.$disconnect();
    });

