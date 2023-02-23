import { Sale } from '@infra/entities/sale.entity'
import { SalesRepository } from '@infra/repositories/Sales.repository'

export class SalesService {
     private readonly salesRepository = new SalesRepository()

     constructor () {
          this.get = this.get.bind(this)
          this.post = this.post.bind(this)
     }

     async post (salesDto): Promise<Sale[]> {
          try {
               const sales = []
               salesDto.forEach(async sale => {
                    sales.push(new Sale(sale))
               })
               for (const sale of sales) {
                    await this.salesRepository.insert(sale)
               }
               return sales
          } catch (err) {
               throw new Error(err)
          }
     }

     async get (): Promise<Sale[]> {
          try {
               return await this.salesRepository.findAll()
          } catch (err) {
               throw new Error(err)
          }
     }

     async put (id: number, salesDto: Partial<Sale>): Promise<Sale[]> {
          try {
               await this.salesRepository.update({ id, params: salesDto })
               return await this.salesRepository.findAll<Sale>({ id })
          } catch (err) {
               throw new Error(err)
          }
     }

     async softDelete ({ id }): Promise<Sale[]> {
          try {
               const sales = await this.salesRepository.findAll<Sale>({ id })
               if (!sales.length) return sales
               await this.salesRepository.softDelete({ id })
               return sales
          } catch (err) {
               throw new Error(err)
          }
     }
}
