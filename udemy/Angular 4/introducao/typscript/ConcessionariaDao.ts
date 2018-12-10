import { DaoInterface } from './DaoInterface'
import Concessionaria from './Concessionaria'

export class ConcessionariaDao implements DaoInterface{

    nomeTabela: string = 'tb_concessionaia'
    
    inserir(object: Concessionaria): boolean {
        console.log('logica de insert')
        return true
    }

    atualizar(object: Concessionaria): boolean {
        console.log('logica de Update')
        return true
    }
    remover(id: number): Concessionaria {
        console.log('Logica de Delete')
        return new Concessionaria('', [])
    }
    selecionar(id: number): Concessionaria {
        console.log('Logica de Select')
        return new Concessionaria('', [])
    }
    selecionarTodos(): [any] {
        console.log('Logica getAll')
        return [ new Concessionaria('', []) ]
    }
    
}