import { authMiddleware } from '@infra/configs/authentication'
import { UserRepository } from '@infra/repositories/User.repository'

export class UsersUseCase {
     public userRepository: UserRepository = new UserRepository()
     constructor () {
          this.get = this.get.bind(this)
     }

     @authMiddleware({ accessLevels: ['user'] })
     async get (req, res): Promise<void> {
          const users = await this.userRepository.findAll()
          res.json(users)
     }
}
