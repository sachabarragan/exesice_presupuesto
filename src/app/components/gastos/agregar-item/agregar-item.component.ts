import { Component, OnInit } from '@angular/core';
import { Item } from '../../../models/items.model';
import { PresupuestoService } from '../../../services/presupuesto.service';

@Component({
  selector: 'app-agregar-item',
  templateUrl: './agregar-item.component.html',
  styleUrls: ['./agregar-item.component.css']
})
export class AgregarItemComponent implements OnInit {

  item: Item = new Item();

  constructor(public _presupuesto: PresupuestoService) { }

  ngOnInit(): void {
  }

  agregarGasto(): void {
    this._presupuesto.agregarItem(this.item);
    if(!this._presupuesto.montoVacio && !this._presupuesto.nombreVacio && !this._presupuesto.noMas){
      this.item = new Item();
    }
  }

}
