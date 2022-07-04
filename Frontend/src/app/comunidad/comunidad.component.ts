import { Component, OnInit } from '@angular/core';
import {ComunidadService} from '../services/comunidad.service';
import { FormularioServicioService } from '../formulario-servicio.service';
@Component({
  selector: 'app-comunidad',
  templateUrl: './comunidad.component.html',
  styleUrls: ['./comunidad.component.scss']
})
export class ComunidadComponent implements OnInit {

  proyectos= new Array<any>();
  email = "";
  constructor(private http:ComunidadService , public serviceSignIn:FormularioServicioService) { 

  }

  ngOnInit(): void {
    this.http.GetProyectos().subscribe(data=>{
       console.log(data.message);
       var datos = data.message;
       console.log(datos.length);
       for(let i=0; i<datos.length; i++){
         this.proyectos.push(datos[i]);
       }
     })
    this.email = this.serviceSignIn.email;

  }

  deleteProyecto(nombre:string){
    this.http.deleteProyecto(nombre).subscribe((data:any)=>{
      console.log(data);
    })
  }
  comprobacion(){
    if(this.email == "admin@kesos.com"){
      return true;
    }
    else{
      return false;
    }
  }

}
