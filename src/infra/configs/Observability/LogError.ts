import { type LogsContexts } from '@domain/utils/Observability/Logs.enum'
import { Logs } from './Observability'

export class ContextError extends Error {
     constructor (message: string, public context: LogsContexts) {
          super(JSON.stringify({ message, context }))
          new Logs(context).error({ message, context })
     }
}
