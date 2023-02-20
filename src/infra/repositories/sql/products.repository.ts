import db from '@db'
import { LogsContexts } from '@domain/utils/Observability/Logs.enum'
import { ContextError } from '@infra/configs/Observability/LogError'
import { type Product } from '@infra/entities/product.entity'
export default {
     async findOne (params: Record<string, string | number>) {
          const product: Product[] = await db.query(`
          SELECT * FROM products 
          WHERE ${Object.keys(params).map(key => `${key} = ${params[key]}`).join(' AND ')}  
          LIMIT 1`)
          return product[0]
     },
     async findAll () {
          const products: Product[] = await db.query('SELECT * FROM products')
          return products
     },
     async update ({ id, params }: { id: string, params: Record<string, string | number> }) {
          try {
               const update = await db.query(
                    `
               UPDATE products 
               SET ${Object.keys(params).map(key => `${key} = ${params[key]}`).join(', ')}
               WHERE id = ${id} 
               `)
               return update
          } catch {
               return new ContextError('Error on update product', LogsContexts.PRODUCT)
          }
     }
}