import { PartialType } from '@nestjs/mapped-types'
import { IsBoolean, IsNumber, IsString } from 'class-validator'

export class CreateInvoiceDto {
    @IsNumber()
    readonly id: number;

    @IsString()
    readonly vendor_name: string;

    @IsNumber()
    readonly amount: number;

    @IsString()
    readonly due_date: string;

    @IsString()
    readonly description: string;

    @IsNumber()
    readonly user_id: number; //de revenit

    @IsBoolean()
    readonly paid: boolean;
}

export class UpdateInvoiceDto extends PartialType(CreateInvoiceDto) { }