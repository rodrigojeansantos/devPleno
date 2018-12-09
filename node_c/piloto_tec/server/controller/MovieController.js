//http://localhost:4000/api/movies?title=rei
const bluebird = require('bluebird')
const repository = bluebird.promisifyAll(require('../repository/MovieRepository'))
const service = require('../service/MovieService')
//Pensar em mais um repository

function notFound(data){
  if(!data){
    let err = new Error('movie not found')
    err.status = 404
    throw err
  }
  return data
}

const MovieController = {

  list(req, res, next){
    let query = {}
    
    if (req.query.title)  
    query = { title: new RegExp(req.query.title, 'i') } // 'i' Case sensitive

    /*Promise.all([
      repository.listAsync(query),
      repository.countAsync(query)
    ])*/
    service.list(query)
      .then(data => {
          res.json({
          items: data[0],
          total: data[1]
        })
      })
      .catch(next)
  },

  byId(req, res, next){
    let id = req.params.id    

    repository.byIdAsync(id)
      .then(notFound)
      .then(data => res.json(data))
      .catch(next)
  },

  create(req, res, next){
    let body = req.body  
    repository.createAsync(body)
      .then(data => res.status(201).json(data))
      .catch(next)
  },

  patch(req, res, next){
    let id = req.params.id
    let body = req.body

    delete body._id

    repository.patch(id, body, (err, data) => {
      res.json(data)
    })
  },

  update(req, res, next){
    let id = req.params.id
    let body = req.body

    delete body._id

    repository.updateAsync(id, body)
      .then(function(data){ res.json(data) })
  },

  delete(req, res, next){
    let id = req.params.id  
    repository.delete(id, (err, data) => {
      res.status(204).send('')    
    })
  }

}

module.exports = MovieController