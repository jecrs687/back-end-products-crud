import { type Request, type Response } from 'express'

export default {
     async index (req: Request, res: Response): Promise<void> {
          res.send('TODO')
     },
     async store (req: Request, res: Response): Promise<void> {
          res.status(201).json('CREATED')
     }
}
