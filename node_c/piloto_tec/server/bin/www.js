const app = require('../app')
const cluster = require('cluster')
const numCpus = require('os').cpus().length

//serverless aquele cluster seria 1... Não faz sentido.

//pm2, forever.

/*if (cluster.isMaster){
  for(let i=0; i< numCpus; i++){
    let worker = cluster.fork()

    worker.on('exit', () => {
      console.log('worker is dead')
      cluster.fork()
    })
  }
}else{
  app.listen(4000, () => {
    console.log('server is up')
  })
}*/

app.listen(4000, () => {
  console.log('server is up')
})