import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateInvoiceDto, UpdateInvoiceDto } from './dto/invoices.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from "@prisma/client"

const userWithoutPassword = Prisma.validator<Prisma.UserSelect>()({
    id: true,
    name: true,
    email: true,
})

@Injectable()
export class InvoicesService {
    constructor(private prisma: PrismaService) { }
    getInvoices(id: number, userlimit?: number, offset?: number) {
        return this.prisma.invoice.findMany({
            where: {
                user_id: id,
            },
            include: {
                user: {
                    select: userWithoutPassword
                },
            }
        }
        );
    }

    getInvoice(id: string, userId: number) {
        const invoice = this.prisma.invoice.findUnique({
            where: {
                id: Number(id),
                user_id: userId,
            },
            include: {
                user: {
                    select: userWithoutPassword
                },
            }
        })
        if (!invoice) {
            throw new NotFoundException(`Invoice with ID ${id} not found`)
        }
        return invoice;
    }
}
