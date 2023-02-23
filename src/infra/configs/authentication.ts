
interface AuthOptions {
     accessLevels: string[]
}

const accessToken = {
     Seedz: 'user'
}

export function authMiddleware (options: AuthOptions) {
     return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
          const originalMethod = descriptor.value

          descriptor.value = function (req: any, res: any, next: any) {
               try {
                    const authHeader = req.headers.authorization

                    if (!authHeader) {
                         return res.status(401).send('Unauthorized')
                    }
                    const token = authHeader.split(' ')[1]
                    if (!token) {
                         return res.status(401).send('Unauthorized')
                    }
                    if (options.accessLevels.includes(accessToken[token])) return originalMethod.apply(this, [req, res, next])
                    return res.status(401).send('Unauthorized')
               } catch (err) {
                    return res.status(401).send('Unauthorized')
               }
          }

          return descriptor
     }
}
