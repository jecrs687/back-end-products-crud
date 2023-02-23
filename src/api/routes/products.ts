import { ProductsUseCase } from '@api/use-cases/products/Products.usecase'
import { Router } from 'express'

const router = Router()
const productUseCase = new ProductsUseCase()
router.get('/', productUseCase.get)

export default router
