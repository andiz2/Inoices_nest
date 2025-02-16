import {PartialType} from '@nestjs/mapped-types'

export class Invoice{
    id: number;
    vendor_name: string;
    amount: number;
    due_date: Date;
    description: string;
    user_id: number; //de revenit
    paid: boolean;   
}
