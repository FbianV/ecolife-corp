import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import {FormularioService} from '../formulario.service';
import { CuentaService } from '../services/cuenta.service';
import { FormularioServicioService } from '../formulario-servicio.service';
import { CambiosDatosService} from '../cambios-datos.service';
@Component({
    selector: 'app-cuenta',
    templateUrl: './cuenta.component.html',
    styleUrls: ['./cuenta.component.scss']
})
export class CuentaComponent implements OnInit {
    activarMsg:boolean=false;
    formulario:FormGroup;
    formulario2:FormGroup;
    formulario3:FormGroup;
    usuariologeado:boolean=true;
    constructor(public FormB:FormBuilder, public ServicioSignUp:FormularioService,private http:CuentaService ,
        public ServicioSignIn:FormularioServicioService, public ServicioCambios:CambiosDatosService) {
        this.formulario=this.FormB.group({
            nombre: ["", [Validators.required,Validators.maxLength(20)]],
            correo: ["",[Validators.required,Validators.email]],
            password: ["",[Validators.required,Validators.minLength(6)]],
        })
        this.formulario2=this.FormB.group({
            correo: ["",[Validators.required,Validators.email]],
            password: ["",[Validators.required,Validators.minLength(6)]],
        })
        this.formulario3=this.FormB.group({
            name: ["", [Validators.required,Validators.maxLength(20)]],
        })
    }

    ngOnInit(): void {
        this.http.isloged().subscribe(data=>{
            console.log("mensaje: ",data.message);
            if(data.message.email != ''){
                this.usuariologeado=false;
            }else{
                console.log(data.message);
                this.usuariologeado=true;
            }
        })

    }

    validacion(){
        console.log(this.formulario.get("nombre")?.value);
        this.activarMsg=true;
        this.ServicioSignUp.EnviarDatos({"id":1,"nombre":this.formulario.get("nombre")?.value,"correo":this.formulario.get("correo")?.value,"password":this.formulario.get("password")?.value});

    }
    validacion2(){
        console.log(this.formulario2.get("correo")?.value);
        this.activarMsg=true;
        this.ServicioSignIn.EnviarDatosSignIn({"id":1,"nombre":"","correo":this.formulario2.get("correo")?.value,"password":this.formulario2.get("password")?.value});

    }
    cambiardatos(){
        var nombre:any= this.formulario3.get("name")?.value;
        this.ServicioCambios.CambiarDatos(nombre);
    }

}
