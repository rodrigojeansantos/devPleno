import { DaoInterface } from './DaoInterface'
import Pessoa from './Pessoa'

export class PessoaDao implements DaoInterface{

    nomeTabela: string = 'tb_pessoa'
    
    inserir(object: Pessoa): boolean {
        console.log('logica de insert')
        return true
    }

    atualizar(object: Pessoa): boolean {
        console.log('logica de Update')
        return true
    }
    remover(id: number): Pessoa {
        console.log('Logica de Delete')
        return new Pessoa('','')
    }
    selecionar(id: number): Pessoa {
        console.log('Logica de Select')
        return new Pessoa('','')
    }
    selecionarTodos(): [any] {
        console.log('Logica getAll')
        return [ new Pessoa('','') ]
    }
    
}