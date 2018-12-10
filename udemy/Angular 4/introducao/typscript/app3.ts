const log = console.log

import Carro from './Carro'
import Moto from './Moto'
import Concessionaria from './Concessionaria'


let carro = new Carro('Ferrari', 2)

let moto = new Moto()

let conc = new Concessionaria('',[])

moto.acelerar()

log(carro)
log(moto)
log(conc)