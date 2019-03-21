// iterators: Permite interar sobre uma informação

var txt = 'Ireland' // iterable
var it = txt[Symbol.iterator]() //iterator

// Só mostra true quando acha undefined

// Posso parar em algum momento
for( letter of txt){
  console.log(it.next()) 
  if(letter === 'a') break
}