import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from '../../../services/presupuesto.service';

@Component({
  selector: 'app-lista-presupuestos',
  templateUrl: './lista-presupuestos.component.html',
  styleUrls: ['./lista-presupuestos.component.css']
})
export class ListaPresupuestosComponent implements OnInit {

  presupuesto: number = 0;

  constructor(public _presupuesto: PresupuestoService) { 
    this.presupuesto = this._presupuesto.presupuesto;
  }

  ngOnInit(): void {

  }

}
