import { number, object, string } from 'zod'

export const inventorySchema = object({
     productId: string(),
     quantity: number().min(0)
})
