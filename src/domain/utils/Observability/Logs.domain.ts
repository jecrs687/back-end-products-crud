export interface ILogs {
     log: (...message: [string | object | number]) => void
     error: (...message: [string | object | number]) => void
     warn: (...message: [string | object | number]) => void
     info: (...message: [string | object | number]) => void
}
