import e, {Request, Response} from 'express';
import {database} from '../index';
import { ref, query, equalTo , set , onValue, orderByChild, remove,child} from "firebase/database";
import { getAuth } from "firebase/auth";



export const getProyectosComunidad=(req:Request, res:Response)=>{

    const proyectos = ref(database, 'proyectos/');
    var data;
    onValue(proyectos, (snapshot) => {
    data = snapshot.val();
    if(data){
        var datosFinales = filrardatos(data);
        console.log(datosFinales);
        res.status(200).send({ error:'',message:(datosFinales)});
    }else{
        console.log("no hay datos");
            res.status(200).send({ error:'',message:[]});
        }
    });
   

}


export const postProyectoComunidad=(req:Request, res:Response)=>{
    const {body}=req;
    res.json({
        msg:'postProducto',
        body
    })

}

export const putProyectoComunidad=(req:Request, res:Response)=>{
    const {idProducto}=req.params;
    const {body}=req;
    res.json({
        msg:'putProducto',
        body
    })
}


export const deleteProyectoComunidad=(req:Request, res:Response)=>{
    const auth = getAuth();
    const user = auth.currentUser;
    const idProyecto:string = req.query.nombre?.toString() ||'';

    if (user) {
        const email = user.email?.toString() ||'';
        const name = user.displayName?.toString() ||'';
        if(email==='admin@kesos.com' && name==='admin'){
            console.log("idProyecto :",idProyecto);
            remove(ref(database, 'proyectos/' +idProyecto));
            res.status(200).send({ error:'', message:'Proyecto eliminado' });
        }

    } else {
        res.status(400).send({ error:'Sin usuario logeados',message:''});
        // No user is signed in.
    }
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