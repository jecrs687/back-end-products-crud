import { Router } from 'express'
import controller from '@infra/controllers/sales'

const router = Router()

router.get('/', controller.index)
router.post('/', controller.store)

export default router
