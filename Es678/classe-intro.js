class Animal{
  constructor(kind, sound){
    this.kind = kind
    this.sound = sound
  }

  hello(){ console.log(`${this.sound} Eu sou um ${this.kind}`)}
  static info(){ console.log('this is a class to create animals.')}

  get name(){ console.log('My name is Jake')}

  set nickname(nick){ this.nick = nick; console.log(this.nick)}
}

const dog = new Animal('dog', 'auuu auu')
const cat = new Animal('gato', 'miiauaua')

console.log(dog, cat)
Animal.info()
dog.name
dog.nickname = 'J'
dog.nick