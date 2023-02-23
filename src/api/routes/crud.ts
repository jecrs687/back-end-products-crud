import { CrudUseCase } from '@api/use-cases/crud/Crud.usecase'
import { Router } from 'express'

const router = Router()

const crudUseCase = new CrudUseCase()
router.get('/', crudUseCase.get)
router.post('/', crudUseCase.store)

export default router
