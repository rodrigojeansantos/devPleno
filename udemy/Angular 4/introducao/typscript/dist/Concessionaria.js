"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    Concessionaria.prototype.fornecerEndere = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDeCarros = function () {
        return this.listaDeCarros;
    };
    Concessionaria.prototype.fornecerHorarioDeFuncionamento = function () {
        return 'De segunda a sexta das 08:00 as 18:00';
    };
    return Concessionaria;
}());
exports.default = Concessionaria;
