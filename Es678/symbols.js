// Symbol é imutavel e unico
let foo = Symbol('descricao')
let bar = Symbol('descricao')

console.log(foo === bar)
console.log(foo == bar)

let obj = {
  [Symbol('name')]: 'Willian',
  [Symbol('age')]: 26,
  city: 'São Paulo'
}

console.log(Object.keys(obj))
const symbols = Object.getOwnPropertySymbols(obj);
const data = symbols.map(sym => obj[sym]);
console.log(data)