import { RootUseCase } from '@api/use-cases/root/Root.usecase'
import { Router } from 'express'

const router = Router()
const rootUseCase = new RootUseCase()
router.get('/', rootUseCase.get)

export default router
