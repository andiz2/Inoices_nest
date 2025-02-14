import { Injectable } from '@nestjs/common';
import { CreateInvoiceDto } from './create-invoice.dto';
import { UpdateInvoiceDto } from './update-invoice.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getInvoices(limit?: number, offset?: number): string{
    return `Hello Invoices! Limit: ${limit}, offset: ${offset}`;
  }
  getInvoice(id: string): string{
    return `Hello Invoice ${id}!`;
  }
  postBody(body: CreateInvoiceDto): string{
    return `Received invoice: ${JSON.stringify(body)}`
  }
  updateBody(id:string): string{
    return `Modify invoice with ID: ${id}`
  }
  delete(id:string):string {
    return `Delete invoice with ID: ${id}`
  }
}
