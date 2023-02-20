import { type Request, type Response } from 'express'

import usersRepository from '../repositories/sql/users.repository'

export default {
     async index (req: Request, res: Response): Promise<Response<any>> {
          return res.json(await usersRepository.all())
     }
}
