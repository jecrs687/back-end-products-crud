import * as supertest from 'supertest'

import db from '@db'
import app from '../app'

const request = supertest(app)

beforeEach(() => {
     process.env.NODE_ENV = 'test'
})

describe('Products Tets', () => {
     it('should exists products table', async () => {
          try {
               const table = await db.query('SELECT * FROM products')

               expect(table.length).toBeGreaterThan(0)
          } catch (error) {
               error.stack = null
               error.message = 'should exists products table failed.'
               throw error
          }
     })
     it('table products should have 3 products', async () => {
          try {
               const table = await db.query('SELECT * FROM products')
               expect(table.length).toBe(3)
          } catch (error) {
               error.stack = null
               error.message = 'table products should have 3 products failed.'
               throw error
          }
     })

     it('[GET] /products', async () => {
          try {
               const res = await request
                    .get('/products')
                    .set({ authorization: 'Bearer Seedz' })
               const resultSet = await db.query('SELECT * FROM products')
               expect(res.status).toBe(200)
               expect(JSON.stringify(res.body)).toBe(JSON.stringify(resultSet))
          } catch (error) {
               error.stack = null
               error.message = 'Test [GET] /products failed.'
               throw error
          }
     })
})
