/* let fetch = require('node-fetch')

function ajax(url){
  fetch(url)
    .then( data => data.json() )
    .then( data => console.log(data) )
}

function ajaxGen(){ 
  const url = 'https://'

  console.log('Buscando posts....')
  ajax(`${url}willianjusten.com.br/search.json`)
  
  console.log('Buscando dados no github')
  ajax(`${url}api.github.com/users/rodrigojeansantos`)
}

ajaxGen() // repara que os comentarios vem primeiro.
*/
//Arrumando ordem do problema acimma

let fetch = require('node-fetch')

function ajax(url){
  fetch(url)
    .then( data => data.json() )
    .then( data => dados.next(data) )
}

function* ajaxGen(){ 
  const url = 'https://'

  console.log('Buscando posts....')
  const posts = yield ajax(`${url}willianjusten.com.br/search.json`)
  console.log(posts)
  
  console.log('Buscando dados no github')
  const gitHub = yield ajax(`${url}api.github.com/users/rodrigojeansantos`)
  console.log(gitHub)

  console.log('Buscando eventos no github ')
  const events = yield ajax(`${url}api.github.com/users/rodrigojeansantos/received_events`)
  console.log(events)
}

const dados = ajaxGen()
dados.next()