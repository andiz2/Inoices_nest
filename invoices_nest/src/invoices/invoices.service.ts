import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateInvoiceDto, UpdateInvoiceDto } from './dto/invoices.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InvoicesService {
    constructor(private prisma: PrismaService) { }
    getInvoices(limit?: number, offset?: number) {
        return this.prisma.invoice.findMany();
    }

    getInvoice(id: string) {
        const invoice = this.prisma.invoice.findUnique({
            where: {
                id: Number(id),
            },
        })
        if (!invoice) {
            throw new NotFoundException(`Invoice with ID ${id} not found`)
        }
        return invoice;
    }
    /*
        postBody(body: CreateInvoiceDto): CreateInvoiceDto {
            this.invoices.push(body);
            return body;
        }
    
        updateBody(id: string, body: UpdateInvoiceDto) {
            const existingInvoice = this.getInvoice(id);
            if (existingInvoice) {
    
            }
        }
    
        delete(id: string): string {
            const invoiceindex = this.invoices.findIndex(item => item.id === Number(id));
            if (invoiceindex >= 0) {
                this.invoices.splice(invoiceindex, 1)
            }
            return `Deleteted invoice with ID: ${id} if there was any`
        }
    */
}
