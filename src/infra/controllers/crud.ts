import { type Request, type Response } from 'express'

export default {
     index (req: Request, res: Response): void {
          res.send('CRUD INDEX')
     },
     store (req: Request, res: Response): void {
          res.send('CRUD STORE')
     }
}
