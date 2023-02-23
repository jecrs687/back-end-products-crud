
import { SalesTransform } from '@domain/adapters/sales.adapter'
import { SalesService } from '@domain/services/sales.service'
import { authMiddleware } from '@infra/configs/authentication'
import { type Sale } from '@infra/entities/sale.entity'

export class SalesUseCase {
     private readonly salesTransform = new SalesTransform()
     private readonly salesService = new SalesService()
     constructor () {
          this.get = this.get.bind(this)
          this.post = this.post.bind(this)
          this.delete = this.delete.bind(this)
          this.put = this.put.bind(this)
     }

     @authMiddleware({ accessLevels: ['user'] })
     async get (req, res): Promise<void> {
          const sales = await this.salesService.get()
          res.status(200).json(sales)
     }

     @authMiddleware({ accessLevels: ['user'] })
     async post (req, res): Promise<void> {
          try {
               const salesDto: Sale[] = this.salesTransform.post(req, res)
               const salesInverse = await this.salesService.post(salesDto)
               res.status(201).json(salesInverse)
          } catch (err) {
               res.status(400).json({ error: err.message })
          }
     }

     @authMiddleware({ accessLevels: ['user'] })
     async put (req, res): Promise<void> {
          try {
               const { id } = req?.params
               const salesDto: Partial<Sale> = this.salesTransform.put(req, res)
               const salesInverse = await this.salesService.put(id, salesDto)
               res.status(201).json(salesInverse)
          } catch (err) {
               res.status(400).json({ error: err.message })
          }
     }

     @authMiddleware({ accessLevels: ['user'] })
     async delete (req, res): Promise<void> {
          try {
               const id = +req?.params?.id
               const sales = await this.salesService.softDelete({ id })
               res.status(201).json(sales)
          } catch (err) {
               res.status(400).json({ error: err.message })
          }
     }
}
