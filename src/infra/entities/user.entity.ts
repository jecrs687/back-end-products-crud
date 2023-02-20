import { type IUser } from '@domain/entities/user.entity'

export class User implements IUser {
     id: string
     name: string
     balance: number
     constructor (id: string, name: string, balance: number) {
          this.id = id
          this.name = name
          this.balance = balance
     }
}
