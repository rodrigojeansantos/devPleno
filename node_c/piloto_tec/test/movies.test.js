//TDD = Teste depois de deploy
const db = require('../server/config/mongo')
 
describe('CRUD tests', () => {
  
  let id

  beforeEach(done => {
    let movie = { title: 'O rei leão' }
    db.collection('movies').insert(movie, (err, data) => {
      id = data._id.toString()
      done()
    })
  })

  afterEach(done => {
    db.collection('movies').remove({}, done)
  })

  it('GET /api/movies/:id return one movie', () => {
  
    return request.get(`/api/movies/${id}`)
      .then(result => {
        // assert.equal(result.status, 200)
        assert.ok(result.body)
        assert.equal(result.body.title, 'O rei leão')
        
      })
  })

  it('POST /api/movies should create a new movie', () => {
  
    let movie = { title: 'Movie Testador' }
    return request.post('/api/movies')
      .send(movie)
      .then(result => {
        assert.equal(result.status, 201)
        assert.ok(result.body)
        assert.ok(result.body._id)
        
      })
  })

  it('PUT /api/movies/:id should change params', () => {
  
    let movie = { title: 'Movie Testador' }
    return request.put(`/api/movies/${id}`)
      .send(movie)
      .then(result => { assert.equal(result.status, 200) })
  })

  it('DELETE /api/movies/:id return 204', () => {
  
    return request.delete(`/api/movies/${id}`)
      .then(result => {
        assert.equal(result.status, 204)        
        
      })
  })

})


