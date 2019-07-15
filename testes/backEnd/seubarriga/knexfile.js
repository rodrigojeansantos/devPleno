module.exports = {
  test: {
    client: 'mysql',
    connection: {
      host : 'localhost',
      user : 'root',
      password : '',
      database : 'barriga'
    },
    migrations: {
      directory : 'src/migrations'
    }
  }
}