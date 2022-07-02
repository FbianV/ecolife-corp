import {Request, Response} from 'express';

export const getCuenta=(req:Request, res:Response)=>{


}

export const postCuenta=(req:Request, res:Response)=>{
    const {body}=req;
    res.json({
        msg:'postProducto',
        body
    })

}
