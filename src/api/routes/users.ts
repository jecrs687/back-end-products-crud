import { UsersUseCase } from '@api/use-cases/users/Users.usecase'
import { Router } from 'express'

const router = Router()
const usersUseCase = new UsersUseCase()
router.get('/', usersUseCase.get)

export default router
