import { Injectable } from '@angular/core';
import {Cuenta} from './model/cuenta';
import { CuentaService } from './services/cuenta.service';

@Injectable({
  providedIn: 'root'
})
export class FormularioServicioService {

  email = "a";
  constructor(private http:CuentaService) { }

  EnviarDatosSignIn(Datos:Cuenta){
    this.http.GetUsuarios(Datos.correo,Datos.password).subscribe(data=>{
      this.email = data.message.email;
    }
    ) 
  }
  exportarEmail(){
    return this.email;
  }
  
}
