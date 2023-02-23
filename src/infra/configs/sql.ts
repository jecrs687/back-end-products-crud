import db from '@db'
import { type LogsContexts } from '@domain/utils/Observability/Logs.enum'
import { ContextError } from '@infra/configs/Observability/LogError'
export class Repository {
     table = ''
     context: LogsContexts
     constructor (table: string, context?: LogsContexts) {
          this.table = table
          this.context = context
     }

     async findOne<T>(params: Record<string, string | number>): Promise<T[]> {
          const data: T[] = await db.query(`
          SELECT * FROM ${this.table} 
          WHERE ${Object.keys(params).map(key => `${key} = ${params[key]}`).join(' AND ')}  
          LIMIT 1`)
          return data
     }

     async findAll<T>(): Promise<T[]> {
          const data: T[] = await db.query(`SELECT * FROM ${this.table}`)
          return data
     }

     async update ({ id, params }: { id: string, params: Record<string, string | number> }): Promise<boolean | ContextError> {
          try {
               const updated = await db.query(
                    `
               UPDATE ${this.table} 
               SET ${Object.keys(params).map(key => `${key} = ${params[key]}`).join(', ')}
               WHERE id = ${id} 
               `)
               return !!updated
          } catch {
               return new ContextError('Error on update product', this.context)
          }
     }

     async insert (params: Record<any, any>): Promise<boolean | ContextError> {
          try {
               const inserted = await db.query(`
               INSERT INTO ${this.table} (${Object.keys(params).join(', ')})
               VALUES (${Object.values(params).map(value => `'${value}'`).join(', ')})
               `)
               return !!inserted
          } catch {
               return new ContextError('Error on insert product', this.context)
          }
     }
}
