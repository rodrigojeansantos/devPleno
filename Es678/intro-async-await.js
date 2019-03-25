//Basico
/*  - async/await funciona obrigatoriamente no protocolo de Promises
    - async é uma palavra chave usada no inicio de uma função
    - await é usado para avisar a função para esperar o resultado da Promise
    - await só pode ser usado para uma função com async    
*/

let fetch = require('node-fetch')

async function getPosts(){
  const resp = await fetch('https://willianjusten.com.br/search.json')
  const data = await resp.json()
  return data.map(post => { console.log(post.title) })  
}

getPosts()
