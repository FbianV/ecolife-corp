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
    params:{email:"adasd", password:"adasd"}
  }
  GetUsuarios(email:string, password:string):Observable<any>{
    this.HttpUploadOptions.params.email = email;
    this.HttpUploadOptions.params.password = password;
    return this.http.get('http://localhost:3000/api/cuenta/signIn',this.HttpUploadOptions);
  }
  PostUsuarios(email:string, password:string):Observable<any>{
    console.log(111);
    return this.http.post('http://localhost:3000/api/cuenta/signUp',{email, password},this.HttpUploadOptions);
  }
}
