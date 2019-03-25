
const animals = {
  camel: 3,
  llama: 2,
  alpaca: 5
}

console.log(Object.values(animals))

//Reduce cria um acumulador e vai somando.
console.log(Object.values(animals).reduce((a,b) => a + b))