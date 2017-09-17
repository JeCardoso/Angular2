import {DaoInterface} from './dao.interface';
import {AnimalDao} from './animal-dao';
import {Animal} from './../Classes/animal';

let dao: DaoInterface = new AnimalDao();
let animal: Animal = new Animal('Rex');

dao.insert(animal);
dao.update(animal);
dao.delete(10);
dao.find(7);
dao.findAll();
