const app = require('express')()
const consign = require('consign')
const knex = require('knex')
const knexfile = require('../knexfile')
const knexLogger = require('knex-logger')

app.db = knex(knexfile.test)
app.use(knexLogger(app.db))

consign({ cwd: 'src', verbose: false }) // iniciar no src como padrão
  .include('./config/middlewares.js')
  .then('./services')
  .then('./routes')
  .then('./config/routes.js')
  .into(app)

app.get('/', (req, res) => {
  res.status(200).send()
})

/* app.db.on('query', (query) => {
  console.log({ sql: query.sql, bindings: query.bindings ? query.bindings.join(','): '' })
}) */

module.exports = app