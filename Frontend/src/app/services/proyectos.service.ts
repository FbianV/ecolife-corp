import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {FormularioServicioService} from '../formulario-servicio.service';
@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor(private http:HttpClient ,public service:FormularioServicioService) { }
  HttpUploadOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, DELETE, PUT',
      'Access-Control-Allow-Headers': 'content-type',
      'Content-Type': 'application/json'
    })
  }
  GetProyectos():Observable<any>{
    return this.http.get('http://localhost:3000/api/proyectos',this.HttpUploadOptions);
  }
}
