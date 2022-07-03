import {Request, Response} from 'express';
import {proyecto} from '../models/proyectos';
import {database} from '../index';
import { ref, query, orderByChild, equalTo , set } from "firebase/database";
import { getAuth } from "firebase/auth";


export const getProyectos=(req:Request, res:Response)=>{


    const auth = getAuth();

    const myUserId:string = auth.currentUser?.uid || '';
    const proyectosUsuarios:any = query(ref(database, 'proyectos/'),equalTo(myUserId));

    if(proyectosUsuarios.length>0){
    res.status(200).send({ error:'', message:(JSON.stringify(proyectosUsuarios)) } );
    }else{
        res.status(400).send({ error:'Usuario sin proyectos', message:'' } );
    }
    /*
    res.json([
        {
            "name": "Parque solar de vista al mar",
            "description": "Parque muy grande de 3300 KW de energía solar. El parque cuenta con una vista panorámica al mar, con una gran cantidad de árboles y una gran cantidad de plantas de interés.",
            "type": "Energía solar",
            "image": "../../assets/images/1.jpeg"
        },
        {
            "name": "Parque eólico en Atacama",
            "description": "Parque eólico cuenta con 50 generadores eólicos en las planicies de Atacama",
            "type": "Energía eólica",
            "image": "../../assets/images/2.png"
        }
    ]);*/
}
export const getProyecto=(req:Request, res:Response)=>{
    var Proyecto:proyecto = findProjectByid(req.params.id);
    if(Proyecto){
        res.status(200).send({ error:'', message:(JSON.stringify(Proyecto)) } );
    }else{
        res.status(400).send({ error:'Usuario sin proyectos', message:'' } );
    }/*

  res.json([
      {
          "name": "Parque solar de vista al mar",
          "description": "Parque muy grande de 3300 KW de energía solar. El parque cuenta con una vista panorámica al mar, con una gran cantidad de árboles y una gran cantidad de plantas de interés.",
          "type": "Energía solar",
          "image": "../../assets/images/1.jpeg"
      },
      {
          "name": "Parque eólico en Atacama",
          "description": "Parque eólico cuenta con 50 generadores eólicos en las planicies de Atacama",
          "type": "Energía eólica",
          "image": "../../assets/images/2.png"
      }
  ]);*/
}



export const postProyecto=(req:Request, res:Response)=>{
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