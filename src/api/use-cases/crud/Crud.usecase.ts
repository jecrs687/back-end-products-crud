import { authMiddleware } from '@infra/configs/authentication'
export class CrudUseCase {
     constructor () { }

     @authMiddleware({ accessLevels: ['user'] })
     async get (req, res): Promise<void> {
          res.status(200).json({})
     }

     @authMiddleware({ accessLevels: ['user'] })
     async store (req, res): Promise<void> {
          res.send('CRUD STORE')
     }
}
