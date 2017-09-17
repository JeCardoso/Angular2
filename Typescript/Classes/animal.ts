export class Animal{
    
    private nome: string;

    constructor(nome:string){
        this.nome = nome;
    }

    /* Usar crase para inserir atributos */
    public mover(distanciaEmMetros: number) : void{
        console.log(`${this.nome} moveu ${distanciaEmMetros}m.`);
    }

}