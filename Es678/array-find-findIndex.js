const data = [ 
  { name: 'Rodrigo BJ', age: 29, city: 'São paulo' },
  { name: 'Rodrigo Jean', age: 28, city: 'Minas Gerais' }
]
const sampleArray = [4, -5, 0, -1]

//Find espera uma equação, condição para buscar os dados.
// x é cada valor do array mas ele não chega no 0
// Ou seja ele responde ao primeiro valor dessa condição
const underZero = sampleArray.find(x => x < 0)
console.log(underZero)

//Retorna o index.
const underZeroIndex = sampleArray.findIndex(x => x < 0)
console.log(underZeroIndex)

//Procurando no find
const findName = pessoa => pessoa.name === 'Rodrigo BJ'

//Retorna um objeto tb
const bj = data.find(findName)
console.log(bj)

//Retornando index
const bjIndex = data.findIndex(findName)
console.log(bjIndex)