import { Sale } from '@infra/entities/sale.entity'
import { SalesRepository } from '@infra/repositories/Sales.repository'

export class SalesService {
     private readonly salesRepository = new SalesRepository()

     constructor () {
          this.get = this.get.bind(this)
          this.post = this.post.bind(this)
     }

     post (salesDto): Sale[] {
          try {
               const sales = []
               salesDto.forEach(async sale => {
                    sales.push(new Sale(sale))
               })
               sales.forEach(async sale => {
                    await this.salesRepository.insert(sale)
               })
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

     async put (salesDto): Promise<Sale[]> {
          try {
               return await this.salesRepository.findAll()
          } catch (err) {
               throw new Error(err)
          }
     }

     async softDelete (): Promise<Sale[]> {
          try {
               return await this.salesRepository.findAll()
          } catch (err) {
               throw new Error(err)
          }
     }
}
