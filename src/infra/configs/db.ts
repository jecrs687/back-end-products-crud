import { Database } from 'sqlite3';

const db = new Database(':memory:')

db.serialize(async () => {
     (() => {
          db.run(
               `
               CREATE TABLE users 
               (id INTEGER PRIMARY KEY, name STRING, balance INTEGER, deletedAt DATETIME DEFAULT CURRENT_TIMESTAMP)
               `
          )
          const stmt = db.prepare('INSERT INTO users (name,balance) values (?, ?)')
          stmt.run('Diogo', 100)
          stmt.finalize()
     })();
     (() => {
          const products = [
               ['PRODUCT 001', 10],
               ['PRODUCT 002', 20],
               ['PRODUCT 003', 30]
          ]
          db.run(
               `
               CREATE TABLE products 
               (id INTEGER PRIMARY KEY, name STRING, stock INTEGER, value INTEGER, deletedAt DATETIME DEFAULT CURRENT_TIMESTAMP)
               `
          )
          const stmt = db.prepare(
               `INSERT INTO products (name, value) values ${products
                    .map(() => '(?, ?)')
                    .join(', ')}`
          )
          stmt.run(...products.flat())
          stmt.finalize()
     })();
     (() => {
          const inventories = [[1, 100], [2, 100], [3, 100], [3, -60]]
          db.run(
               `
               CREATE TABLE inventories 
               (id INTEGER PRIMARY KEY, productId INTEGER, value INTEGER, deletedAt DATETIME DEFAULT CURRENT_TIMESTAMP)
               `
          )
          const stmt = db.prepare(
               'INSERT INTO inventories (productId, value) values (?, ?)'
          )
          for (const inventory of inventories) {
               stmt.run(...inventory)
          }
          stmt.finalize()
     })();
     (() => {
          db.run(
               `
               CREATE TABLE sales 
               (id INTEGER PRIMARY KEY, productId INTEGER, userId INTEGER, quantity INTEGER, value INTEGER, deletedAt DATETIME DEFAULT CURRENT_TIMESTAMP)
               `
          )
     })()
})

const query = async (query): Promise<any> =>
     await new Promise((resolve, reject) => {
          db.all(query, (err, rows) => {
               if (err) {
                    reject(err); return
               }
               resolve(rows)
          })
     })

export default { ...db, query }
