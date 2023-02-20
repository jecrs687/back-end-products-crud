import { type Request, type Response } from 'express'

import productsRepository from '../repositories/sql/products.repository'

export default {
     async index (req: Request, res: Response): Promise<void> {
          res.json(await productsRepository.findAll())
     }
}
