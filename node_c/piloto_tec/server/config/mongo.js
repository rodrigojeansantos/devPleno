const mongojs = require('mongojs')
let config = 'localhost:27017/cinemark'

if (process.env.NODE_ENV === 'test'){ 
  config = 'localhost:27017/cinemark-test'
}

const db = mongojs(config)

db.on('error', (err) => {
  console.log('Caiuuu....', err)
})

module.exports = db