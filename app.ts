import * as express from 'express'
import * as morgan from 'morgan'

import authorization from '@api/middlewares/authorization'
import foward from '@api/middlewares/foward'
import crud from '@api/routes/crud'
import products from '@api/routes/products'
import root from '@api/routes/root'
import sales from '@api/routes/sales'
import users from '@api/routes/users'
import { json } from 'body-parser'

const app = express()
app.use(authorization)
app.use(foward)
app.use(json())
app.use(morgan('combined', { skip: (req, res) => process.env.NODE_ENV === 'test' }))
app.use(root)
app.use('/crud', crud)
app.use('/products', products)
app.use('/sales', sales)
app.use('/users', users)
export default app
