"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animal_1 = require("./../Classes/animal");
var AnimalDao = (function () {
    function AnimalDao() {
        this.tablename = '';
    }
    AnimalDao.prototype.insert = function (object) {
        console.log("Animal inserido");
        return true;
    };
    AnimalDao.prototype.update = function (object) {
        console.log("Animal atualizado");
        return true;
    };
    AnimalDao.prototype.delete = function (id) {
        console.log("Animal deletado");
        return null;
    };
    AnimalDao.prototype.find = function (id) {
        console.log("Animal encontrado");
        return null;
    };
    AnimalDao.prototype.findAll = function () {
        console.log("Animais encontrados");
        return [new animal_1.Animal('Rex')];
    };
    return AnimalDao;
}());
exports.AnimalDao = AnimalDao;
//# sourceMappingURL=animal-dao.js.map