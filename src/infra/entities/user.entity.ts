import { type IUser } from '@domain/entities/user.entity'
import { randomUUID } from 'crypto'

interface props {
     name: string
     balance: number
     id?: string
}
export class User implements IUser {
     id: string
     name: string
     balance: number
     constructor ({ name, balance, id }: props) {
          this.id = id || randomUUID()
          this.name = name
          this.balance = balance
     }
}
