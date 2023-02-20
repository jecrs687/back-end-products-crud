import { type Request, type Response } from 'express'

import productsRepository from '../repositories/typeorm/products.repository'

export default {
     async index (req: Request, res: Response): Promise<void> {
          res.json(await productsRepository.all())
     }
}
