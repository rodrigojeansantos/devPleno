const router = require('express').Router()
const controller = require('../controller/MovieController')

function isValidId(req, res, next){
  if(req.params.id && req.params.id.length !== 24){
      let err = new Error('invalid id')
      err.status = 422
      return next(err)
  }
  next()
}

router.get('/', controller.list)
router.get('/:id', isValidId, controller.byId) //http://localhost:4000/api/movies/5c0283842c5be6ecefdf8e77
router.post('/', controller.create)
router.put('/:id', isValidId, controller.update)
router.patch('/:id', isValidId, controller.update)
router.delete('/:id', isValidId, controller.delete)

module.exports = router;