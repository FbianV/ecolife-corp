import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ComunidadService {

  constructor(private http:HttpClient) { }
  HttpUploadOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, DELETE, PUT',
      'Access-Control-Allow-Headers': 'content-type',
      'Content-Type': 'application/json'
    }),
    params:{nombre:""}
  }
  GetProyectos():Observable<any>{
    return this.http.get('http://localhost:3000/api/comunidad');
  }
  deleteProyecto(nombre:string):Observable<any>{
    this.HttpUploadOptions.params.nombre = nombre;
    return this.http.delete('http://localhost:3000/api/comunidad',this.HttpUploadOptions);
  }
}
