
const service = require('../service/MovieService')

const MainController = {

    home(req, res, next){ //es6
        // res.send('Novo Olá.....')
        service.list({})
          .then(datas => {
            res
              .render('home', 
                  { title: 'Partiu bar', 
                    items: datas[0] 
                  }
                )
          })
        
    },

    contact: (req, res, next) => {
        res.send('Página de contato')
    }
}

module.exports = MainController