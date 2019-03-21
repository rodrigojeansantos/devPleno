class Animal {
  constructor(name) { this.name = name}

  hello(){ return `I'm ${this.name}`}
}

class Dog extends Animal{
  constructor(name, sound){  
    super(name); 
    this.sound = sound 
  }
  bark(){ return `${this.sound} i am ${this.name}`}
}

const elephant = new Animal('Dumboo')
const dog = new Dog('Jake', 'auuuu auu')
console.log(elephant.hello())
console.log(dog.hello())
console.log(dog.name)
console.log(dog.bark())
