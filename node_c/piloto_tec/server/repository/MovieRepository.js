
const db = require('../config/mongo')
const collection = 'movies'

const MovieRepository = {

  count(query, callback){
    db.collection(collection).count(query, callback)
  },

  list(query, callback){
    db.collection(collection).find(query, callback)
  },

  byId(id, callback) {
    let query = {_id: db.ObjectId(id)}
    db.collection(collection).findOne(query, callback)
  },

  create(body, callback) {
    db.collection(collection).insert(body, callback)
  },

  update(id, body, callback) {
    let query = { _id: db.ObjectId(id)}
    db.collection(collection).update(query, body, callback)
  },

  patch(id, body, callback) {
    let query = { _id: db.ObjectId(id)}
    db.collection(collection).patch(query, { $set: body}, callback)
  },

  delete(id, callback) {
    let query = {_id: db.ObjectId(id)}
    db.collection(collection).remove(query, callback)    
  },
}

module.exports = MovieRepository