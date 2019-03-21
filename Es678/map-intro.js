//

let m = new Map()
m.set('Rodrigo', 26)
m.set('Jean', 28)
m.set('Santos', 29)

console.log(m, m.size, m.has('Rodrigo'), m.delete('Jean'))
const it = m.values()
it.next()
console.log(it)
