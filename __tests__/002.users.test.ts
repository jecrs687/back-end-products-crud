import * as supertest from 'supertest'

import app from '../app'
import db from '@db'

const request = supertest(app)

beforeEach(() => {
     process.env.NODE_ENV = 'test'
})

describe('Users tests', () => {
     it('should exists users table', async () => {
          const table = await db.query('SELECT * FROM users')
          try {
               expect(table.length).toBeGreaterThan(0)
          } catch (error) {
               error.stack = null
               error.message = 'Test [GET] /users failed.'
               throw error
          }
     })
     it('table products should have 1 user', async () => {
          const table = await db.query('SELECT * FROM users')
          try {
               expect(table.length).toBe(1)
          } catch (error) {
               error.stack = null
               error.message = 'Test [GET] /users failed.'
               throw error
          }
     })
     it('[GET] /users', async () => {
          try {
               const res = await request.get('/users').set({ authorization: 'Bearer Seedz' })
               const resultSet = await db.query('SELECT * FROM users')
               expect(res.status).toBe(200)
               expect(JSON.stringify(res.body)).toBe(JSON.stringify(resultSet))
          } catch (error) {
               error.stack = null
               error.message = 'Test [GET] /users failed.'
               throw error
          }
     })
})
