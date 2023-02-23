import { number, object, string } from 'zod'

export const userSchema = object({
     name: string().min(3).max(255),
     balance: number().min(0)
})
