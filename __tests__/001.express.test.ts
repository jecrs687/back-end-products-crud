import * as supertest from 'supertest'

import app from '../app'

const request = supertest(app)

beforeEach(() => {
     process.env.NODE_ENV = 'test'
})

describe('Express Tests', () => {
     it('[GET] / should deny', async () => {
          try {
               const res = await request.get('/').set({ authorization: 'Bearer Beens' })
               expect(res.status).toBe(401)
          } catch (error) {
               error.stack = null
               error.message = 'Test [GET] / should deny failed.'
               throw error
          }
     })

     it('[GET] / should authorize', async () => {
          try {
               const res = await request.get('/').set({ authorization: 'Bearer Seedz' })
               expect(res.status).toBe(200)
               expect(res.text).toBe('Hello World!')
               expect(res.headers.authorization).toBeDefined()
          } catch (error) {
               error.stack = null
               error.message = 'Test [GET] / should authorize failed.'
               throw error
          }
     })
})
