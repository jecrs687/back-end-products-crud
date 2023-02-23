import { LogsContexts } from '@domain/utils/Observability/Logs.enum'
import { Repository } from '@infra/configs/sql'

export class SalesRepository extends Repository {
     constructor () {
          super('sales', LogsContexts.SALE)
     }
}
