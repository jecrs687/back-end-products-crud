import * as supertest from 'supertest'

import db from '@db'
import app from '../app'

const request = supertest(app)

beforeEach(() => {
     process.env.NODE_ENV = 'test'
})

describe('Sales Tests', () => {
     it('should exists sales table', async () => {
          try {
               const table = await db.query('SELECT * FROM sales')
               expect(table.length).toBe(0)
          } catch (error) {
               error.stack = null
               error.message = 'should exists sales table failed.'
               throw error
          }
     })
     it('[GET] /sales', async () => {
          const response = await request.get('/sales').set({ authorization: 'Bearer Seedz' })
          try {
               expect(response.status).toBe(200)
               expect(response.body.length).toBe(0)
          } catch (error) {
               error.stack = null
               error.message = '[GET] /sales failed.'
               throw error
          }
     })
     it('[POST] /sales SALE1', async () => {
          try {
               const response = await request.post('/sales')
                    .send({
                         userId: 1,
                         items: [
                              {
                                   productId: 1,
                                   quantity: 1,
                                   value: 10
                              }
                         ]
                    })
                    .set('Content-Type', 'application/json')
                    .set('Accept', 'application/json')
                    .set({ authorization: 'Bearer Seedz' })
               expect(response.status).toBe(201)
          } catch (error) {
               error.stack = null
               error.message = '[POST] /sales failed.'
               throw error
          }
     })
     it('[PUT] /sales SALE1', async () => {
          try {
               const sales: Array<Record<string, string | number>> = await db.query('SELECT * FROM sales')
               const response = await request.put(`/sales/${sales[0].id}`)
                    .send({
                         userId: 5
                    })
                    .set('Content-Type', 'application/json')
                    .set('Accept', 'application/json')
                    .set({ authorization: 'Bearer Seedz' })
               expect(response.status).toBe(201)
               const salesUpdated: Array<Record<string, string | number>> = await db.query('SELECT * FROM sales')
               expect(salesUpdated[0].userId).toBe(5)
          } catch (error) {
               error.stack = null
               error.message = '[POST] /sales failed.'
               throw error
          }
     })
     it('[DELETE] /sales SALE1', async () => {
          try {
               const sales: Array<Record<string, string | number>> = await db.query('SELECT * FROM sales')
               const response = await request.delete(`/sales/${sales[0].id}`)
                    .set('Content-Type', 'application/json')
                    .set('Accept', 'application/json')
                    .set({ authorization: 'Bearer Seedz' })
               expect(response.status).toBe(201)
               const salesDisabled: Array<Record<string, string | number>> = await db.query('SELECT * FROM sales')
               expect(salesDisabled[0].deletedAt).toBeDefined()
          } catch (error) {
               error.stack = null
               error.message = '[POST] /sales failed.'
               throw error
          }
     })
})
