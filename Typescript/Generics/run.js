"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dao_1 = require("./dao");
var animal_1 = require("./../Classes/animal");
var cavalo_1 = require("./../Classes/cavalo");
var dao = new dao_1.Dao();
var animal = new animal_1.Animal('Abel');
var cavalo = new cavalo_1.Cavalo('Ponei');
dao.insert(animal);
dao.insert(cavalo);
//# sourceMappingURL=run.js.map