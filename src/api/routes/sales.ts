import { SalesUseCase } from '@api/use-cases/sales/SalesGet.usecase'
import { Router } from 'express'

const router = Router()

const salesUseCase = new SalesUseCase()
router.get('/', salesUseCase.get)
router.put('/', salesUseCase.put)
router.delete('/:id', salesUseCase.delete)
router.post('/', salesUseCase.post)

export default router
