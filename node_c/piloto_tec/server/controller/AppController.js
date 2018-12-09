const AppController = {    
    notFound(req, resp, next){
        let err = new Error('Não achei')
        err.status = 404
        next(err)
    },

    errorHandler(err, req, resp, next){

        //console.log(err.stack)
        resp.status(err.status || 500)
        resp.json({ err: err.message })    
    }
}

module.exports = AppController