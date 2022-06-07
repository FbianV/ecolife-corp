import { Component, OnInit } from '@angular/core';
import proyectos from '../json/proyectos.json';

@Component({
  selector: 'app-comunidad',
  templateUrl: './comunidad.component.html',
  styleUrls: ['./comunidad.component.scss']
})
export class ComunidadComponent implements OnInit {

  proyectos = proyectos;

  constructor() { }

  ngOnInit(): void {
  }

}
