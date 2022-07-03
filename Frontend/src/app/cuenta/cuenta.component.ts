import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import {FormularioService} from '../formulario.service';
import { CuentaService } from '../services/cuenta.service';
import { FormularioServicioService } from '../formulario-servicio.service';
@Component({
    selector: 'app-cuenta',
    templateUrl: './cuenta.component.html',
    styleUrls: ['./cuenta.component.scss']
})
export class CuentaComponent implements OnInit {
    activarMsg:boolean=false;
    formulario:FormGroup;
    formulario2:FormGroup;
    constructor(public FormB:FormBuilder, public Servicio:FormularioService,private http:CuentaService ,public Servicio2:FormularioServicioService) {
        this.formulario=this.FormB.group({
            nombre: ["", [Validators.required,Validators.maxLength(20)]],
            correo: ["",[Validators.required,Validators.email]],
            password: ["",[Validators.required,Validators.minLength(6)]],
        })
        this.formulario2=this.FormB.group({
            correo: ["",[Validators.required,Validators.email]],
            password: ["",[Validators.required,Validators.minLength(6)]],
        })
    }

    ngOnInit(): void {
    }

    validacion(){
        console.log(this.formulario.get("nombre")?.value);
        this.activarMsg=true;
        this.Servicio.EnviarDatos({"id":1,"nombre":this.formulario.get("nombre")?.value,"correo":this.formulario.get("correo")?.value,"password":this.formulario.get("password")?.value});

    }
    validacion2(){
        console.log(this.formulario2.get("correo")?.value);
        this.activarMsg=true;
        this.Servicio2.EnviarDatosSignIn({"id":1,"nombre":"","correo":this.formulario2.get("correo")?.value,"password":this.formulario2.get("password")?.value});

    }
}
