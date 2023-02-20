import { type IProduct } from '@domain/entities/product.entity'

export class Product implements IProduct {
     id: string
     name: string
     stock: number
     value: number
     constructor (id: string, name: string, stock: number, value: number) {
          this.id = id
          this.name = name
          this.stock = stock
          this.value = value
     }
}
