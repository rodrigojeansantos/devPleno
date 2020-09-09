//

let m = new Map()
m.set('Rodrigo', 26)
m.set('Jean', 28)
m.set('Santos', 29)

// console.log(m, m.size, m.has('Rodrigo'), m.delete('Jean'))
const it = m.values()
//console.log(m)
//it.next()
// console.log(it)

// console.log(it)


for (let a of m.keys()) {
    // alert(vegetable); // cucumber, tomatoes, onion
    console.log(it.next())
  }



