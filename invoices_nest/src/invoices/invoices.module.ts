import { Module } from '@nestjs/common';
import { InvoicesController } from './invoices.controller';
import { InvoicesService } from './invoices.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
    controllers: [InvoicesController],
    providers: [InvoicesService],
    imports: [PrismaModule],
})
export class InvoicesModule { }
