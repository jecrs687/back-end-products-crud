import { type IProduct } from '@domain/entities/product.entity'
import { randomUUID } from 'crypto'

interface props {
     id?: string
     name: string
     stock: number
     value: number
}
export class Product implements IProduct {
     id: string
     name: string
     stock: number
     value: number
     constructor ({ id, name, stock, value }: props) {
          this.id = id || randomUUID()
          this.name = name
          this.stock = stock
          this.value = value
     }
}
