import { type ILogs } from '@domain/utils/Observability/Logs.domain'
import { type LogsContexts } from '@domain/utils/Observability/Logs.enum'

export class Logs implements ILogs {
     private readonly context
     log (...message: [string | object | number]): void {
          console.log({ message, context: this.context })
     }

     error (...message: [string | object | number]): void {
          console.error({ message, context: this.context })
     }

     warn (...message: [string | object | number]): void {
          console.warn({ message, context: this.context })
     }

     info (...message: [string | object | number]): void {
          console.info({ message, context: this.context })
     }

     constructor (context: LogsContexts) {
          this.context = context
     }
}
