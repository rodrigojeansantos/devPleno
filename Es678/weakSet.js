// Parecido com o set
// Não aceita tipos primitivos só objetos
let obj_1 = { name: 'Rodrigo', age: 29 }
let obj_2 = { name: 'Jean', age: 28 }

let ws = new WeakSet([obj_1, obj_2])

console.log(ws.has(obj_1))
ws.add({type: 'QualquerCoisa'})

console.log(ws)