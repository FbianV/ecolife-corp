import {Request, Response} from 'express';
import {proyecto} from '../models/proyectos';
import {database} from '../index';
import { ref, query, equalTo , set , onValue, orderByChild} from "firebase/database";
import { getAuth } from "firebase/auth";


export const getProyectos=(req:Request, res:Response)=>{

    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
        var id = user.email?.toString() ||'';
        var data;
        const proyectos = query(ref(database, 'proyectos'), orderByChild('user'), equalTo(id));

        onValue(proyectos, (snapshot) => {
        data = snapshot.val();
        if(data){
        var datosFinales = filrardatos(data);
        res.status(200).send({ error:'',message:(datosFinales)});
        }
        else{
            res.status(200).send({ error:'',message:[]});
        }
    });
    } else {
        res.status(400).send({ error:'Sin usuario logeados',message:''});
        // No user is signed in.
    }
}
export const getProyecto=(req:Request, res:Response)=>{
    /* var Proyecto:proyecto = findProjectByid(req.params.id);
    if(Proyecto){
        res.status(200).send({ error:'', message:(JSON.stringify(Proyecto)) } );
    }else{
        res.status(400).send({ error:'Usuario sin proyectos', message:'' } );
    } */

}

export const postProyecto=(req:Request, res:Response)=>{
    console.log("getProyectos|||");
    const {body}=req;
    var project:proyecto = (body.ProyectoId,body.nombre,body.descripcion,body.imagen, body.tipo);
    set(ref(database, 'proyecto/'), {
        ProyectoId: project.ProyectoId,
        nombre: project.nombre,
        descripcion: project.descripcion,
        imagen: project.imagen,
        tipo: project.tipo
  });
    res.status(201).send({ error:'', message:project } );

}

export const putProyecto=(req:Request, res:Response)=>{
    console.log("getProyectosasdasd");
    const {idProducto}=req.params;
    const {body}=req;
    res.json({
        msg:'putProducto',
        body
    })
}


export const deleteProyecto=(req:Request, res:Response)=>{
    const {idProducto}=req.params;
    res.json({
        msg:'deleteProducto',
        idProducto
    })
}


//functions 
function filrardatos(datos:any){
   for(var i = 0; i < datos.length; i++){
         if(datos[i] == null){
             datos.splice(i, 1);
         }  
    }
    return datos;
}