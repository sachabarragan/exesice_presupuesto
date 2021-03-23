import { Injectable } from '@angular/core';
import { Item } from '../models/items.model';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {

  presupuesto: number = 5000;
  items: Item[] = [];
  restan: number;
  clase: string = 'verde';
  clases: string[];
  controlClase: number = 0;
  noMas: boolean = false;
  nombreVacio: boolean = false;
  montoVacio: boolean = false;

  constructor() { 
    this.clases = ['verde','casi-verde','amarillo','casi-rojo','rojo'];
    this.restan = this.presupuesto;
  }

  agregarItem(itemAAgregar: Item){
    if(itemAAgregar.nombre === ''){
      this.nombreVacio = true;
      return;
    } else if(itemAAgregar.monto === 0){
      this.nombreVacio = false;
      this.montoVacio = true;
      return;
    } else {
      this.montoVacio = false;
    }
    if((this.restan - itemAAgregar.monto) >= 0){
      this.items.push(itemAAgregar);
      this.calcularRestante(itemAAgregar);
      this.cambiarClase();
      this.noMas = false;
    } else {
      this.noMas = true;
    }
    //console.log(this.items);
  }

  calcularRestante(itemARestar: Item): void {
      this.restan = this.restan - itemARestar.monto;
    //console.log(this.restan);
  }

  cambiarClase(): void {
    this.controlClase = this.presupuesto / 5;

    if(this.presupuesto === this.restan){
      this.clase = this.clases[0];
    } else if((this.restan <= (this.controlClase * 4)) && (this.restan > (this.controlClase * 3))){
      // console.log("ES un cuart")
      this.clase = this.clases[1];
    } else if((this.restan <= (this.controlClase * 3)) && (this.restan > (this.controlClase * 2))){
      // console.log("ES un tercio")
      this.clase = this.clases[2];
    } else if((this.restan <= (this.controlClase * 2)) && (this.restan > this.controlClase)){
      // console.log("ES un doble")
      this.clase = this.clases[3];
    } else if(this.restan <= this.controlClase){
      // console.log("ES un menor")
      this.clase = this.clases[4];
    } else {
      // console.log(`No entra en el if ${typeof (this.controlClase * 4)}`);
    }
  }
}
