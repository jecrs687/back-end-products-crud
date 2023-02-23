import { number, object } from 'zod'

export const salesSchema = object({
     productId: number(),
     userId: number(),
     quantity: number().min(0),
     value: number().min(0)
})
