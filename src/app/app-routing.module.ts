import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearDestinatarioComponent } from './components/crear-destinatario/crear-destinatario.component';
import { HacerTransferenciaComponent } from './components/hacer-transferencia/hacer-transferencia.component';
import { VerTransferenciaComponent } from './components/ver-transferencia/ver-transferencia.component';

const routes: Routes = [
  { path: '', component: VerTransferenciaComponent},
  { path: 'crear-destinatario', component: CrearDestinatarioComponent},
  { path: 'hacer-transferencia', component: HacerTransferenciaComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
