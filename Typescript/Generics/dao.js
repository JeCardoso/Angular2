"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dao = (function () {
    function Dao() {
        this.tablename = '';
    }
    Dao.prototype.insert = function (object) {
        console.log("Animal inserido");
        return true;
    };
    Dao.prototype.update = function (object) {
        console.log("Animal atualizado");
        return true;
    };
    Dao.prototype.delete = function (id) {
        console.log("Animal deletado");
        return null;
    };
    Dao.prototype.find = function (id) {
        console.log("Animal encontrado");
        return null;
    };
    Dao.prototype.findAll = function () {
        console.log("Animais encontrados");
        return [null];
    };
    return Dao;
}());
exports.Dao = Dao;
//# sourceMappingURL=dao.js.map