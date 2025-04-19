import {z} from 'zod'

export const UserBaseSchema = z.object({
    id: z.number().int(),
    email: z.string().email("Invalid email format"),
    password: z.string().min(4, "Password must be at least 4 chars long"),
    name: z.string().min(1, "name is required"),
})

