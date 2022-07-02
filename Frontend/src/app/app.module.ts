import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComunidadComponent } from './comunidad/comunidad.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { AddproyectoComponent } from './addproyecto/addproyecto.component';


import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ComunidadComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    CuentaComponent,
    ProyectosComponent,
    AddproyectoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
