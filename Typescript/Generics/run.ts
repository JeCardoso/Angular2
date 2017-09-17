import {Dao} from './dao';
import {Animal} from './../Classes/animal';
import {Cavalo} from './../Classes/cavalo';

let dao: Dao<Animal> = new Dao<Animal>();

let animal: Animal = new Animal('Abel');
let cavalo: Cavalo = new Cavalo('Ponei');

dao.insert(animal);

dao.insert(cavalo);