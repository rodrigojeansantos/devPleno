// Definir comportamento diferentes para metodo dentro de um objeto
let obj = {
  name: 'Rodrigo',
  age: 26
};
let proxy = new Proxy(obj, {
  get(target, name) {
      console.log('Alguém está o pedindo o nome =D');
      return target[name];
  },
  set(target, name, value) {
      console.log('Alguém está mudando o nome!');
      target[name] = value.toUpperCase();
  }
});

proxy.name = 'Jonas'
proxy.name