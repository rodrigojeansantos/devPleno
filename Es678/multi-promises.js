
const currency = new Promise((res, rej) => {
  setTimeout(() => {
    res({currency: 'euro', value: 3.50})
  }, 2000)
})

const countries = new Promise((res, rej) => {
  setTimeout(() => {
    res(['Ireland', 'England', 'Scotland'])
  }, 600)
})

//Trabalha em cima de todas a promisses da lista.
//Depois que elas forem resolvidas vou para o then
Promise
  .all([currency, countries])
  .then(responses =>{
    console.log(responses)
  })


  //Usando Race, quando o primeiro responder ele devolve 
  // E os outros são ignorados