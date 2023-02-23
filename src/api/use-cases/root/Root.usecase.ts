import { authMiddleware } from '@infra/configs/authentication'
export class RootUseCase {
     constructor () { }

     @authMiddleware({ accessLevels: ['user'] })
     async get (req, res): Promise<void> {
          res.send('Hello World!')
     }
}
