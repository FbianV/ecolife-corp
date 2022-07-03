import { Component, OnInit } from '@angular/core';
import {ProyectosService} from '../services/proyectos.service';
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

  proyectos= new Array<any>();
  constructor(private http:ProyectosService) { }

  ngOnInit(): void {
    this.http.GetProyectos().subscribe(data=>{
      console.log("status",data.status);
      for(let i=0; i<data.length; i++){
        this.proyectos.push(data[i]);
      }
    })
    console.log(this.proyectos);
  }
}
