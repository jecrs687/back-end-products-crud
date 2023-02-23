import { authMiddleware } from '@infra/configs/authentication'
import { ProductRepository } from '@infra/repositories/product.repository'

export class ProductsUseCase {
     public productRepository: ProductRepository = new ProductRepository()
     constructor () {
          this.get = this.get.bind(this)
     }

     @authMiddleware({ accessLevels: ['user'] })
     async get (req, res): Promise<void> {
          const products = await this.productRepository.findAll()
          res.json(products)
     }
}
