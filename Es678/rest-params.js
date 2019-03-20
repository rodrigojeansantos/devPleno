//Retornando um array e multiplicando valores

//Antigo
function multiply(multi, arg1, arg2, arg3){
  let arr = []
  arr.push(multi * arg1)
  arr.push(multi * arg2)
  arr.push(multi * arg3)
  return arr;
}
console.log(multiply(2, 1,2,3))

//args recebe todos os paramtros
function multiNew(mult, ...args){
  return args.map(arg => arg * mult)
}

console.log(multiNew(3, 1, 2, 3, 4))