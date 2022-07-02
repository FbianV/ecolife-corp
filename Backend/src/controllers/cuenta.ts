import {Request, Response} from 'express';
import {database} from '../index';
import {ref, onValue} from "firebase/database";

export const getCuenta=(req:Request, res:Response)=>{
    const proyectos = ref(database, 'usuarios/');
    var data;
    onValue(proyectos, (snapshot) => {
    data = snapshot.val();
    console.log(data);
    res.status(200).send(JSON.stringify(data));
    });
   

}

export const postCuenta=(req:Request, res:Response)=>{
    const {body}=req;
    res.json({
        msg:'postProducto',
        body
    })

}
