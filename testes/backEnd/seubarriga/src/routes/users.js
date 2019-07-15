module.exports = (app) => {
  
  const findAll = (req, res)=> {
    app.services.user.findAll()
      .then( resp =>  res.status(200).json(resp) )
  }
  
  const create = async (req, res) => {
    // const result = await app.db('users').insert(req.body).returning('*')
    const result = await app.services.user.save(req.body)
    res.status(201).json(result[0])
  }

  return { findAll, create }

}