import { type NextFunction, type Request, type Response } from 'express'

export default (req: Request, res: Response, next: NextFunction): Response => {
     if (!req.headers.authorization) {
          return res.status(401).end()
     }
     next()
}
