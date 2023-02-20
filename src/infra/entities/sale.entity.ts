import { type ISale } from '@domain/entities/sale.entity'

export class Sale implements ISale {
     id: string
     productId: string
     userId: string
     quantity: number
     value: number

     constructor (id: string, productId: string, userId: string, quantity: number, value: number) {
          this.id = id
          this.productId = productId
          this.userId = userId
          this.quantity = quantity
          this.value = value
     }
}
