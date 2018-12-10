"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var log = console.log;
var Carro_1 = __importDefault(require("./Carro"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var carroA = new Carro_1.default('Sedan', 4);
var carroB = new Carro_1.default('Fusca', 2);
var carroC = new Carro_1.default('Ferrari', 2);
//let listaDeCarros: Array<Carro> = [carroA, carroB, carroC]
//OU
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria_1.default('Av Paulista', listaDeCarros);
var cliente = new Pessoa_1.default('João', 'Fusca');
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
    //log(carro)
});
log(cliente.dizerQueCarroTem());
