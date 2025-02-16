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
    getInvoices(@Query() paginationQuery: PaginationQueryDto) {
        const { limit, offset } = paginationQuery;
        return this.invoicesService.getInvoices(limit, offset);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    getInvoice(@Param('id') id: string) {
        return this.invoicesService.getInvoice(id);
    }
    /*
        @Post()
        @HttpCode(HttpStatus.ACCEPTED)
        create(@Body() body: CreateInvoiceDto): CreateInvoiceDto {
            return this.invoicesService.postBody(body);
        }
    
        @Patch(':id')
        update(@Param('id') id: string, @Body() body: UpdateInvoiceDto) {
            return this.invoicesService.updateBody(id, body);
        }
    
        @Delete(':id')
        remove(@Param('id') id: string) {
            return this.invoicesService.delete(id);
        }
    */
}
