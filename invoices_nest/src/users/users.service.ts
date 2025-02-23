import { Injectable } from '@nestjs/common';
import { use } from 'passport';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';



@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }

    async getUsers() {
        return this.prisma.user.findMany();
    }

    async findOne(email: string) {
        return this.prisma.user.findUnique({
            where: { email },
        });
    }
}
