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
    Query
} from '@nestjs/common';
import {AppService} from './app.service';
import { CreateInvoiceDto } from './create-invoice.dto';
import { UpdateInvoiceDto } from './update-invoice.dto';
import { PaginationQueryDto } from './pagination-query.dto';

@Controller('invoices')
export class InvoicesController{
    constructor(private readonly appService: AppService) {}

    @Get()
    getInvoices(@Query() paginationQuery: PaginationQueryDto): string {
        const {limit, offset} = paginationQuery;
        return this.appService.getInvoices(limit, offset);
    }

    @Get(':id')
    getInvoice(@Param('id') id: string): string {
        return this.appService.getInvoice(id);
    }

    @Post()
    @HttpCode(HttpStatus.ACCEPTED)
    create(@Body() body: CreateInvoiceDto): string{
        return this.appService.postBody(body);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body: UpdateInvoiceDto): string {
        return this.appService.updateBody(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.appService.delete(id);
    }
    
}
