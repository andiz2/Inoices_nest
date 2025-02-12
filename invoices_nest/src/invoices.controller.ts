import {Controller, Get} from '@nestjs/common';
import {AppService} from './app.service';

@Controller('invoices')
export class InvoicesController{
    constructor(private readonly appService: AppService) {}

    @Get()
    getInvoices(): string {
        return this.appService.getInvoices();
    }
}
