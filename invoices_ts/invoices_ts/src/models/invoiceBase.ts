import {z} from "zod"

export const InvoiceBaseSchema = z.object ({
    id: z.number().int(),
    vendor_name: z.string().min(1, "Vendor name is required"),
    amount: z.number().positive("Amount must be a positive nr"),
    due_date: z.string().min(1, "Due date is required"),
    description: z.string().min(1, "Description is required"),
    paid: z.boolean(),
    
    user_id: z.number().int(),
})

