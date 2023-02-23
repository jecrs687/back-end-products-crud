import { type Request, type Response } from 'express'

import { ProductRepository } from '../repositories/product.repository'

export default {
     async index (req: Request, res: Response): Promise<void> {
          const productsRepository = new ProductRepository()
          res.json(await productsRepository.findAll())
     }
}
