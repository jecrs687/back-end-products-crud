import { type ISale } from '@domain/entities/sale.entity'
import { randomUUID } from 'crypto'
interface props {
     id?: string
     productId: string
     userId: string
     quantity: number
     value: number
}
export class Sale implements ISale {
     id: string
     productId: string
     userId: string
     quantity: number
     value: number

     constructor ({ productId, userId, quantity, value, id }: props) {
          this.id = id || randomUUID()
          this.productId = productId
          this.userId = userId
          this.quantity = quantity
          this.value = value
     }
}
