// Só aceita objetos
// São definições fracas, quando eu apago um obj que ele usa o objeto no weakMap ele some.
// Lembrando que vc precisa aguardar o garbage colector
// Isso é no browser
let obj_1 = { name: 'Rodrigo', age: 29 }
let obj_2 = { name: 'Jean', age: 28 }

let wm = new WeakMap()

wm.set(obj_1, 'Info do BJ')
wm.set(obj_1, 'Info do Jean')

console.log(wm)
obj_1 = null
console.log(wm)