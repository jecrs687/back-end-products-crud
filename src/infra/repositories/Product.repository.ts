import { LogsContexts } from '@domain/utils/Observability/Logs.enum'
import { Repository } from '@infra/configs/sql'

export class ProductRepository extends Repository {
     constructor () {
          super('products', LogsContexts.PRODUCT)
     }
}
