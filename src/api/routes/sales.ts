import { SalesUseCase } from '@api/use-cases/sales/SalesGet.usecase'
import { Router } from 'express'

const router = Router()

const salesUseCase = new SalesUseCase()
router.get('/', salesUseCase.get)
router.put('/', salesUseCase.put)
router.post('/', salesUseCase.post)

export default router
