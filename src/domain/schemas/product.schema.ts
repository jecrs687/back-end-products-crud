import { number, object, string } from 'zod'

export const productSchema = object({
     name: string().min(3).max(255),
     stock: number().min(0),
     value: number().min(0)
})
