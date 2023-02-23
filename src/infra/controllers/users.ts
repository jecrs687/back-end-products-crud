import { type Request, type Response } from 'express'

import { UserRepository } from '../repositories/user.repository'

export default {
     async index (req: Request, res: Response): Promise<Response<any>> {
          const usersRepository = new UserRepository()
          return res.json(await usersRepository.findAll())
     }
}
