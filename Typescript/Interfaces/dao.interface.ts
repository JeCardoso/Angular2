export interface DaoInterface{
    tablename : string;

    insert(object:any): boolean;
    update(object:any): boolean;
    delete(id:number): any;
    find(id:number): any;
    findAll():[any];
    
}