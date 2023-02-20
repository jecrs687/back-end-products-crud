import { type IInventory } from '@domain/entities/inventory.entity'

export class Inventory implements IInventory {
     id: string
     productId: string
     value: number

     constructor (id: string, productId: string, value: number) {
          this.id = id
          this.productId = productId
          this.value = value
     }
}
