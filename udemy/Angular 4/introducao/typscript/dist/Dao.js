"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dao = /** @class */ (function () {
    function Dao() {
        this.nomeTabela = '';
    }
    Dao.prototype.inserir = function (object) {
        console.log('logica de insert');
        return true;
    };
    Dao.prototype.atualizar = function (object) {
        console.log('logica de Update');
        return true;
    };
    Dao.prototype.remover = function (id) {
        console.log('Logica de Delete');
        return Object();
    };
    Dao.prototype.selecionar = function (id) {
        console.log('Logica de Select');
        return Object();
    };
    Dao.prototype.selecionarTodos = function () {
        console.log('Logica getAll');
        return [Object()];
    };
    return Dao;
}());
exports.Dao = Dao;
