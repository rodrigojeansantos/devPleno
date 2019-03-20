let front = ['react', 'angular', 'vue']
let back = ['nodejs', 'java', 'python']

//Desmembrar qualquer elemento interavel
console.log([...'Rodrigo'])
console.log(...front)

//Juntar dois arrays
// let fullStack = front.concat(back)
// ou
let fullStack = [...front, ...back]
console.log(fullStack)

let fullStackWithString = [...front, 'RxJS', ...back]
console.log(fullStackWithString)