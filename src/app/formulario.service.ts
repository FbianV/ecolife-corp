import { Injectable } from '@angular/core';
import {Cuenta} from './model/cuenta';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  constructor() { }


  EnviarDatos(Datos:Cuenta){
    console.log(JSON.stringify(Datos));
  }
}
