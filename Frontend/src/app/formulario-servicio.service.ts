import { Injectable } from '@angular/core';
import {Cuenta} from './model/cuenta';
import { CuentaService } from './services/cuenta.service';

@Injectable({
  providedIn: 'root'
})
export class FormularioServicioService {

  email = "a";
  name = "";
  constructor(private http:CuentaService) { }

  EnviarDatosSignIn(Datos:Cuenta){
    this.http.GetUsuarios(Datos.nombre, Datos.correo,Datos.password).subscribe(data=>{
      this.email = data.message.email;
      this.name = data.message.name;
    }
    ) 
  }
  exportarDatos(){
    return {email: this.email, name: this.name};
  }
  
}
