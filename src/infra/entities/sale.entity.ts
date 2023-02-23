import { type ISale } from '@domain/entities/sale.entity'
interface props {
     id?: number
     productId: string
     userId: string
     quantity: number
     value: number
}
export class Sale implements ISale {
     id: number
     productId: string
     userId: string
     quantity: number
     value: number

     constructor ({ productId, userId, quantity, value, id }: props) {
          this.id = id || Math.floor(Math.random() * 1000000)
          this.productId = productId
          this.userId = userId
          this.quantity = quantity
          this.value = value
     }
}
