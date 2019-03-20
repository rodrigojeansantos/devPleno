function makeSandwich(bread, cheese, sauce){
  console.log(`Um lanche com ${bread} ${cheese} e ${sauce}`)
}

const ingredients = ['white', 'cheddar', 'barbecue'];

makeSandwich(...ingredients)