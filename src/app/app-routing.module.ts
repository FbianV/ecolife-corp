import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComunidadComponent } from './comunidad/comunidad.component';
import { HomeComponent } from './home/home.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { AddproyectoComponent } from './addproyecto/addproyecto.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'comunidad', component: ComunidadComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cuenta', component: CuentaComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'addproyecto', component: AddproyectoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }