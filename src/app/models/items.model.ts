export class Item {
    nombre: string;
    monto: number;

    constructor(pNombre = '', pMonto = 0){
        this.nombre = pNombre;
        this.monto = pMonto;
    }
}