import Veiculo from './Veiculo'

export default class Carro extends Veiculo {

    private numeroDePorta: number

    constructor(modelo: string, numeroDePorta: number){
        super()
        this.modelo = modelo
        this.numeroDePorta = numeroDePorta

    }

}