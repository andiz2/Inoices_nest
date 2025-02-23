// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
    // create some dummy invoices
    const invoice1 = await prisma.invoice.upsert({
        where: { id: 1 },
        update: {},
        create: {
            vendor_name: 'Invoices In Minutes',
            amount: 33.2,
            description:
                "We are excited to share that today's new service!",
            paid: false,
            due_date: "2022-12-24",
            user_id: 1,
        },
    });

    const invoice2 = await prisma.invoice.upsert({
        where: { id: 2 },
        update: {},
        create: {
            vendor_name: 'Invoices Under 10$',
            amount: 13.2,
            description:
                "We are more than excited to share that today's new offer!",
            paid: true,
            due_date: "2024-12-24",
            user_id: 1,
        },
    });

    const invoice3 = await prisma.invoice.upsert({
        where: { id: 3 },
        update: {},
        create: {
            vendor_name: 'Invoices For Free ',
            amount: 0.99,
            description:
                "Limited offer!",
            paid: true,
            due_date: "2025-12-24",
            user_id: 2,
        },
    });

    const invoice4 = await prisma.invoice.upsert({
        where: { id: 4 },
        update: {},
        create: {
            vendor_name: 'Invoices For Amazon ',
            amount: 4.99,
            description:
                "Limited offer today! Grab it now",
            paid: false,
            due_date: "2024-12-24",
            user_id: 1,
        },
    });

    const invoice5 = await prisma.invoice.upsert({
        where: { id: 5 },
        update: {},
        create: {
            vendor_name: 'Invoices For Any Business ',
            amount: 12.99,
            description:
                "More infos in our website www.invoices.com",
            paid: false,
            due_date: "2022-1-4",
            user_id: 2,
        },
    });

    console.log({ invoice1, invoice2, invoice3, invoice4, invoice5 });
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

