export interface DaoInterface<T>{
    tablename : string;

    insert(object:T): boolean;
    update(object:T): boolean;
    delete(id:number): T;
    find(id:number): T;
    findAll():Array<T>;
    
}