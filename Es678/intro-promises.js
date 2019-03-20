// obj que não foi finalizado ainda.
// dados assincronos

defer = new Promise((resolve, reject) => {
  setTimeout(() => {
    if(true){ resolve('Hello') }else{ return reject('Error')}
  }, 2000)
  })

  // o foo só aparece depois que o data foi resolvido.
defer
  .then((data) => { console.log(data); return 'foo' })
  .then((data) => console.log(data))
  .catch((err) => console.log(err))