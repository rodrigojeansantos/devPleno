const log = console.log

import  Carro  from './Carro'
import  Pessoa  from './Pessoa'
import  Concessionaria  from './Concessionaria'

let carroA = new Carro('Sedan', 4)
let carroB = new Carro('Fusca', 2)
let carroC = new Carro('Ferrari', 2)

//let listaDeCarros: Array<Carro> = [carroA, carroB, carroC]
//OU
let listaDeCarros: Carro[] = [carroA, carroB, carroC]

let concessionaria = new Concessionaria('Av Paulista', listaDeCarros)

let cliente = new Pessoa('João', 'Fusca')

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    
    if (carro['modelo'] == cliente.dizerCarroPreferido() ){

        cliente.comprarCarro(carro)

    }
    //log(carro)
})


log(cliente.dizerQueCarroTem())