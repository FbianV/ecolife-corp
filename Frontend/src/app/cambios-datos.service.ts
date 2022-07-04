import { Injectable } from '@angular/core';
import { CuentaService } from './services/cuenta.service';

@Injectable({
  providedIn: 'root'
})
export class CambiosDatosService {

  constructor(private http:CuentaService) { }

  CambiarDatos(nombre:string){
    this.http.updateUsuarios(nombre).subscribe(data=>{
      console.log(data);
    })
  } catch (error:any) {  
    console.log(error);
  }
}
