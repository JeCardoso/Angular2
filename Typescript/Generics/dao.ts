import {DaoInterface} from './dao.interface';

export class Dao<T> implements DaoInterface<T>{
    tablename: string = '';
    insert(object: T): boolean {
        console.log("Animal inserido");
        return true;
    }
    update(object: T): boolean {
        console.log("Animal atualizado");
        return true;
    }
    delete(id: number):T {
        console.log("Animal deletado");
        return null;
    }
    find(id: number):T {
        console.log("Animal encontrado");
        return null;
    }
    findAll(): Array<T> {
        console.log("Animais encontrados");
        return [null];
    }

}