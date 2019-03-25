
let fetch = require('node-fetch')

async function getPosts(){
  try {
    const resp = await fetch('1https://willianjusten.com.br/search.json')
    const data = await resp.json()
    return data.map(post => { console.log(post.title) })  
  }
  catch(err){
    console.error('Erro.... ', err)
  }
}

getPosts()