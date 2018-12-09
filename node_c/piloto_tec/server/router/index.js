const router = require('express').Router()
const controller = require('../controller/MainController')
// const movies = require('./movies')

router.get('/', controller.home)
router.get('/contato', controller.contact)

router.use('/api/movies', require('./movies')) // São todos os vergos get, post, put path...

module.exports = router