import db from '@db'

export default {
     async all () {
          return await db.query('SELECT * FROM users')
     }
}
