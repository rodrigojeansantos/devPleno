// Objeto para guardar valores unicos de um tipo
let mySet = new Set(['Rodrigo', 'Jean', 'Santos'])

mySet.add('marcio')
mySet.add('marcio')
mySet.add('Jean') // De fato não coloca outro valor igual

console.log(mySet, mySet.size)

console.log(mySet.has('Rodrigo'), mySet.has('Goku') )
console.log(mySet.values())
let it = mySet.values()
it.next()
console.log(it.next())

for(name of it){ console.log(name)}
/*
const obj_1 = {name: 'Rodrigo', age: 28}
const obj_2 = {name: 'Jean', age: 29}
const obj_3 = {name: 'Jean', age: 29}
let mySet = new Set([obj_1, obj_2, 'Santos'])
mySet.add(obj_3)
console.log(mySet, mySet.size)*/