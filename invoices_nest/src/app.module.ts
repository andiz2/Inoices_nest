import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InvoicesController } from './invoices.controller';

@Module({
  imports: [],
  controllers: [AppController, InvoicesController],
  providers: [AppService],
})
export class AppModule {}
