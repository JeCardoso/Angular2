"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animal_dao_1 = require("./animal-dao");
var animal_1 = require("./../Classes/animal");
var dao = new animal_dao_1.AnimalDao();
var animal = new animal_1.Animal('Rex');
dao.insert(animal);
dao.update(animal);
dao.delete(10);
dao.find(7);
dao.findAll();
//# sourceMappingURL=run.js.map