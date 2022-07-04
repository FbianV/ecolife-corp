import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  constructor(private http:HttpClient) { }
  HttpUploadOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, DELETE, PUT',
      'Access-Control-Allow-Headers': 'content-type',
      'Content-Type': 'application/json'
    }),
    params:{name:"",email:"", password:""}
  }
  GetUsuarios(name:string, email:string, password:string):Observable<any>{
    this.HttpUploadOptions.params.email = email;
    this.HttpUploadOptions.params.password = password;
    this.HttpUploadOptions.params.name = name;
    return this.http.get('http://localhost:3000/api/cuenta/signIn',this.HttpUploadOptions);
  }
  PostUsuarios(name:string, email:string, password:string):Observable<any>{
    return this.http.post('http://localhost:3000/api/cuenta/signUp',{name, email, password},this.HttpUploadOptions);
  }
}
