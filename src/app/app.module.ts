import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresupuestoComponent } from './components/presupuesto/presupuesto.component';
import { FormularioComponent } from './components/gastos/formulario/formulario.component';
import { ListaPresupuestosComponent } from './components/gastos/lista-presupuestos/lista-presupuestos.component';
import { AgregarItemComponent } from './components/gastos/agregar-item/agregar-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PresupuestoComponent,
    FormularioComponent,
    ListaPresupuestosComponent,
    AgregarItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
