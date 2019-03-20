var data = {
  name: 'Rodrigo', surname: 'BJ', age: 29, blog: 'qualquerSite.com', social: { twitter: 'twitter.com', linkdin: 'linkdin.com'}
}

//Maneira antiga
/* const nome = data.name
const surname = data.surname
const twitter = data.social.twitter
*/

// usando destructuring
const { name, surname } = data
console.log(name, ' ', surname)

const { twitter, linkdin } = data.social
console.log(twitter, linkdin)

//mudar o nome do valor da variavel
const { linkdin: lk } = data.social
console.log(lk)

//Valor que não tenho dentro de data e definindo um default
const { city = 'Argentina' } = data
console.log(city)