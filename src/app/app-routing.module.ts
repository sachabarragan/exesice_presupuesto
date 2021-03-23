import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './components/gastos/formulario/formulario.component';
import { PresupuestoComponent } from './components/presupuesto/presupuesto.component';

const routes: Routes = [
  {path: '', redirectTo: 'presupuesto', pathMatch: 'full'},
  {path: 'presupuesto', component: PresupuestoComponent},
  {path: 'lista-presupuesto', component: FormularioComponent},
  {path: '**', redirectTo: 'presupuesto', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
