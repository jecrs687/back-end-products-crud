import * as supertest from 'supertest'

import app from '../app'
import db from '@db'

const request = supertest(app)

beforeEach(() => {
     process.env.NODE_ENV = 'test'
})

describe('Inventories Tests', () => {
     it('should exists inventories table', async () => {
          try {
               const table = await db.query('SELECT * FROM inventories')
               expect(table.length).toBeGreaterThan(0)
          } catch (error) {
               error.stack = null
               error.message = 'should exists inventories table failed.'
               throw error
          }
     })
     it('product 1 should have 100 of balance', async () => {
          try {
               const [{ sum }] = await db.query(
                    'SELECT sum(value) as sum FROM inventories WHERE productId = 1'
               )
               expect(sum).toBe(100)
          } catch (error) {
               error.stack = null
               error.message = 'product 1 should have 100 of balance failed.'
               throw error
          }
     })
     it('product 2 should have 100 of balance', async () => {
          try {
               const [{ sum }] = await db.query(
                    'SELECT sum(value) as sum FROM inventories WHERE productId = 2'
               )
               expect(sum).toBe(100)
          } catch (error) {
               error.stack = null
               error.message = 'product 2 should have 100 of balance failed.'
               throw error
          }
     })
     it('product 3 should have 40 of balance', async () => {
          try {
               const [{ sum }] = await db.query(
                    'SELECT sum(value) as sum FROM inventories WHERE productId = 3'
               )
               expect(sum).toBe(40)
          } catch (error) {
               error.stack = null
               error.message = 'product 3 should have 40 of balance failed.'
               throw error
          }
     })
})
