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

     async findOne<T>(params?: Record<string, string | number>): Promise<T[]> {
          const data: T[] = await db.query(`
          SELECT * FROM ${this.table} 
          WHERE deletedAt IS NULL
          ${params ? `AND ${Object.keys(params).map(key => `${key} = ${params[key]}`).join(' AND ')}` : ''} 
          LIMIT 1`)
          return data
     }

     async findAll<T>(params?: Record<string, string | number>): Promise<T[]> {
          const data: T[] = await db.query(`
          SELECT * FROM ${this.table} 
          WHERE deletedAt IS NULL
          ${params ? `AND ${Object.keys(params).map(key => `${key} = ${params[key]}`).join(' AND ')}` : ''}
          `)
          return data
     }

     async findAllWithDeleteds<T>(params?: Record<string, string | number>): Promise<T[]> {
          const data: T[] = await db.query(`
          SELECT * FROM ${this.table} 
          ${params ? `WHERE ${Object.keys(params).map(key => `${key} = ${params[key]}`).join(' AND ')}` : ''}
          `)
          return data
     }

     async update ({ id, params }: { id: string | number, params: Record<string, string | number> }): Promise<boolean | ContextError> {
          try {
               const updated = await db.query(
                    `
               UPDATE ${this.table} 
               SET ${Object.keys(params).map(key => `${key} = ${params[key]}`).join(', ')}
               WHERE id = ${id} 
               `)
               return !!updated
          } catch {
               return new ContextError(`Error on update ${JSON.stringify({ id, params })}`, this.context)
          }
     }

     async insert (params: Record<any, string>): Promise<boolean | ContextError> {
          try {
               const inserted = await db.query(`
               INSERT INTO ${this.table} (${Object.keys(params).join(', ')})
               VALUES (${Object.values(params).map(value => `'${value}'`).join(', ')})
               `)
               return !!inserted
          } catch {
               return new ContextError(`Error on insert ${JSON.stringify(params)}`, this.context)
          }
     }

     async softDelete ({ id }: Record<any, string | number>): Promise<boolean | ContextError> {
          try {
               const deleted = await db.query(`
               UPDATE ${this.table} 
               SET deletedAt = CURRENT_TIMESTAMP where id = ${id}
               `)
               return !!deleted
          } catch {
               return new ContextError(`Error on delete ${id}`, this.context)
          }
     }
}
