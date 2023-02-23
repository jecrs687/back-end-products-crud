import { number, object, string } from 'zod'

export const salesSchema = object({
     productId: string(),
     userId: string(),
     quantity: number().min(0),
     value: number().min(0)
})
