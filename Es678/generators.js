// Generators: É um tipo de iterator.
// yield é como um return mas ele não para na função.
function* getNames(){
  console.log('Chamando o primeiro nome')
  yield 'Rodrigo'
  yield 'Jean'
  yield 'Santos'
  console.log('Não cheguei por aqui....')
}

const names = getNames()

console.log(names.next())
console.log(names.next().value)
console.log(names.next())