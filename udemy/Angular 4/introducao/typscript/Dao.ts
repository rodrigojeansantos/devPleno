import { DaoInterface } from './DaoInterface'

export class Dao<T> implements DaoInterface<T> {

    nomeTabela: string = ''
    
    inserir(object: T): boolean {
        console.log('logica de insert')
        return true
    }

    atualizar(object: T): boolean {
        console.log('logica de Update')
        return true
    }
    remover(id: number): T {
        console.log('Logica de Delete')
        return Object()
    }
    selecionar(id: number): T {
        console.log('Logica de Select')
        return Object()
    }
    selecionarTodos(): [any] {
        console.log('Logica getAll')
        return [ Object() ]
    }
    

}