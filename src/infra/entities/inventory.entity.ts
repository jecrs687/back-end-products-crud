import { type IInventory } from '@domain/entities/inventory.entity'
import { randomUUID } from 'crypto'

interface props {
     id?: string
     productId: string
     value: number

}
export class Inventory implements IInventory {
     id: string
     productId: string
     value: number

     constructor ({ id, productId, value }: props) {
          this.id = id || randomUUID()
          this.productId = productId
          this.value = value
     }
}
