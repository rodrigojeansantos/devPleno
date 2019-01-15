const bluebird = require('bluebird')
const redis = require('redis')
// const client = redis.createClient({ host: '192.168.15.36', port: 6379 })
const client = redis.createClient({ host: '127.0.0.1', port: 6379 })

client.on('connect', () => {
  console.log('Redis Ok')
})

client.on('error', (err) => {
  console.log('Error' + err)
})

bluebird.promisifyAll(redis)

module.exports = client