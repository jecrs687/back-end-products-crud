import { Router } from 'express'
import controller from '@infra/controllers/users'

const router = Router()

router.get('/', controller.index)

export default router
