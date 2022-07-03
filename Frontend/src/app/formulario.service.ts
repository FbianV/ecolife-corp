import { Injectable } from '@angular/core';
import {Cuenta} from './model/cuenta';
import { CuentaService } from './services/cuenta.service';
@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  constructor(private http:CuentaService) { }


  EnviarDatos(Datos:Cuenta){
    this.http.PostUsuarios(Datos.correo,Datos.password).subscribe(data=>{
      console.log(data);
    })
  } catch (error:any) {  
    console.log(error);
  }
}
