import {Request, Response} from 'express';
import {proyecto} from '../models/proyectos';
import {database} from '../index';
import { ref, query, equalTo , set , onValue} from "firebase/database";
import { getAuth } from "firebase/auth";


export const getProyectos=(req:Request, res:Response)=>{
    console.log(222222);
    //const auth = getAuth();
    const {params} = req;
    console.log(111);
    console.log(params.idUser);
    var data;
    const proyectos = ref(database, 'proyectos/');
    console.log(0);
    onValue(proyectos, (snapshot) => {
    console.log(1);
    data = snapshot.val();
    console.log(2);
    var datos = findProjectByidUser(data,params.idUser);
    console.log(3);
    if(datos.length >= 1){
        res.status(200).send(JSON.stringify(datos));
    }else{
        console.log("no ay");
        res.status(400).send({error:'No hay proyectos', status:400});
    }

    });
}
export const getProyecto=(req:Request, res:Response)=>{
    var Proyecto:proyecto = findProjectByid(req.params.id);
    if(Proyecto){
        res.status(200).send({ error:'', message:(JSON.stringify(Proyecto)) } );
    }else{
        res.status(400).send({ error:'Usuario sin proyectos', message:'' } );
    }

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
    res.status(201).send({ error:'', message:(JSON.stringify(project)) } );

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

function findProjectByid(id:string){
    const auth = getAuth();

    const myUserId:string = auth.currentUser?.uid || '';
    const proyectoById:any= query(ref(database, 'proyectos/'),equalTo(myUserId),equalTo(id));
    return proyectoById;
}

function findProjectByidUser(array:any, id:string){
    var datos:any = [];
    for(var i in array){
        if(array[i].user == id){
            datos.push(array[i]);
        }
    }
    console.log(datos);
    return datos;
}