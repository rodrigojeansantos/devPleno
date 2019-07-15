module.exports = (app) => {
  const findAll = () =>{
    return app.db('users').select();
  }

  const save = (user) => {
    return app.db('users').insert(user).then(rows => rows )    
  }
  return { findAll, save }
}
