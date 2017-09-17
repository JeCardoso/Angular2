import {DaoInterface} from './dao.interface';
import {Animal} from './../Classes/animal';

export class AnimalDao implements DaoInterface{
    tablename: string = '';
    insert(object: Animal): boolean {
        console.log("Animal inserido");
        return true;
    }
    update(object: Animal): boolean {
        console.log("Animal atualizado");
        return true;
    }
    delete(id: number):Animal {
        console.log("Animal deletado");
        return null;
    }
    find(id: number): Animal {
        console.log("Animal encontrado");
        return null;
    }
    findAll(): [Animal] {
        console.log("Animais encontrados");
        return [new Animal('Rex')];
    }

}