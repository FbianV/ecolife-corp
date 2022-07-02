import { Component, OnInit } from '@angular/core';
import {ComunidadService} from '../comunidad.service';
@Component({
  selector: 'app-comunidad',
  templateUrl: './comunidad.component.html',
  styleUrls: ['./comunidad.component.scss']
})
export class ComunidadComponent implements OnInit {

  proyectos= new Array<any>();

  constructor(private http:ComunidadService) { 

  }

  ngOnInit(): void {
    this.http.GetProyectos().subscribe(data=>{
      for(let i=0; i<data.length; i++){
        this.proyectos.push(data[i]);
      }
    })

  }

}
