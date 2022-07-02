import express, {Application} from 'express';
import ComunidadRouter from './routes/comunidad'; 
//import UsuarioRouter from './routes/usuario';
import ProyectoRouter from './routes/misProyectos';
import CuentaRouter from './routes/cuenta';

import cors from 'cors';

class Server{
    private app:Application;
    private port:number;
    private path={
        comunidad:'/api/comunidad',
        misProyectos:'api/misProyectos',
        cuenta:'/api/cuenta'
    }
    constructor(){
        this.app=express();
        this.port=3000;
        this.middlewares();
        this.routes();
        
    }

    middlewares(){
        //CORS
         this.app.use(cors());
        //parseo BODY

        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.path.comunidad,ComunidadRouter);
        this.app.use(this.path.misProyectos,ProyectoRouter);
        this.app.use(this.path.cuenta,CuentaRouter);
    }
    
    listen(){
        this.app.listen(this.port,()=>{
            console.log(`servidor inicializado ${this.port}`)
        });
    }

   
}

export default Server;