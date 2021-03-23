import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PresupuestoService } from '../../services/presupuesto.service';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styleUrls: ['./presupuesto.component.css']
})
export class PresupuestoComponent implements OnInit {
  presupuesto: number = 0;
  presupuestoValido: boolean = true;

  constructor(private _presupuesto: PresupuestoService, private route: Router) { }

  ngOnInit(): void {
  }

  guardarPresupuesto(): void {
    if(this.presupuesto > 0){
      this._presupuesto.presupuesto = this.presupuesto;
      this._presupuesto.restan = this.presupuesto;
      this.route.navigate(['/lista-presupuesto']);
      this.presupuestoValido = true;
    } else {
      this.presupuestoValido = false;
    }
  }

}
