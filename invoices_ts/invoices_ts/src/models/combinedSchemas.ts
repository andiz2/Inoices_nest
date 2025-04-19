import { UserBaseSchema } from "./userBase";
import { InvoiceBaseSchema } from "./invoiceBase";
import {z} from "zod";


let UserSchema: z.ZodTypeAny;

export const InvoiceSchema = InvoiceBaseSchema.extend({
    user: z.lazy(() => UserSchema).optional(),
})

UserSchema = UserBaseSchema.extend({
    invoice: z.array(InvoiceSchema).optional(),
})

export {UserSchema};


export type Invoice = z.infer<typeof InvoiceSchema>;
export type User = z.infer<typeof UserSchema>;