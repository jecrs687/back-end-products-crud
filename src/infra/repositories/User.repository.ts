import { LogsContexts } from '@domain/utils/Observability/Logs.enum'
import { Repository } from '@infra/configs/sql'

export class UserRepository extends Repository {
     constructor () {
          super('users', LogsContexts.USER)
     }
}
