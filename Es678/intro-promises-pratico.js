let fetch = require('node-fetch')
var posts = fetch('https://willianjusten.com.br/search.json')

// pending: Esta sendo resolvida
// resolved: ja resolveu tudo
// rejected: teve um problema

posts
  .then(data => data.json())
  // .then(data => console.log(data))
  .then(data => data.map(post => { console.log(post.title)}))
  .catch(err => console.error(err))