import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getInvoices(): string{
    return 'Hello Invoices!';
  }
}
