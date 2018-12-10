//import { ConcessionariaDao } from './ConcessionariaDao'
//import { PessoaDao } from './PessoaDao'
import {Dao}  from './Dao'
import Concessionaria from './Concessionaria'
import Pessoa  from './Pessoa'

//let dao: ConcessionariaDao = new ConcessionariaDao()
//let dao2: PessoaDao = new PessoaDao()

let con = new Concessionaria('Av Paulista', [])

let pessoa: Pessoa = new Pessoa('', '')

let dao3: Dao<Concessionaria> = new Dao<Concessionaria>()
let dao4: Dao<Pessoa> = new Dao<Pessoa>()

dao3.inserir(con)
dao4.remover(5)