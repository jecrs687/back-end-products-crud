import { salesSchema } from '@domain/schemas/sales.schema'
import { type Sale } from '@infra/entities/sale.entity'

export class SalesTransform {
     constructor () {}
     post (req, res): Sale[] {
          try {
               const { userId, items } = req.body
               const saleDto: Sale[] = items.map(item => {
                    return salesSchema.parse({ ...item, userId })
               })
               return saleDto
          } catch (err) {
               res.status(400).json({ error: err.message })
          }
     }

     put (req, res): Partial<Sale> {
          try {
               const saleDto: Partial<any> = salesSchema.partial().parse(req.body)

               return saleDto
          } catch (err) {
               res.status(400).json({ error: err.message })
          }
     }
}
