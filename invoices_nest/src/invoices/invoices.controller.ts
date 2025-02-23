import {
    Controller,
    Get,
    Param,
    Body,
    Post,
    HttpStatus,
    HttpCode,
    Patch,
    Delete,
    Query,
    UseGuards,
    Request,
} from '@nestjs/common';
import { CreateInvoiceDto, UpdateInvoiceDto } from './dto/invoices.dto';
import { PaginationQueryDto } from '../pagination-query.dto';
import { InvoicesService } from './invoices.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('invoices')
export class InvoicesController {
    constructor(private readonly invoicesService: InvoicesService) { }

    @UseGuards(JwtAuthGuard)
    @Get()
    getInvoices(@Query() paginationQuery: PaginationQueryDto, @Request() req: any) {
        const userId = req.user.id;
        const { limit, offset } = paginationQuery;
        return this.invoicesService.getInvoices(userId, limit, offset);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    getInvoice(@Param('id') id: string, @Request() req: any) {
        const userId = req.user.id
        return this.invoicesService.getInvoice(id, userId);
    }
}
