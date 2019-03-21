//Maneira antiga ES5

//Função construtora
function Animal(kind, sound){
  this.kind = kind
  this.sound = sound
}


const dog = new Animal('dog', 'auuu auuu')
const cat = new Animal('cat', 'miauuu miaaauuu')

Animal.prototype.hello = function(){
  console.log(`${this.sound} Eu sou um ${this.kind}`)
}

console.log(dog, cat)
console.log(dog.hello())