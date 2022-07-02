import {Request, Response} from 'express';

export const getComunidad=(req:Request, res:Response)=>{
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
    ]);
}


export const postComunidad=(req:Request, res:Response)=>{
    const {body}=req;
    res.json({
        msg:'postProducto',
        body
    })

}

export const putComunidad=(req:Request, res:Response)=>{
    const {idProducto}=req.params;
    const {body}=req;
    res.json({
        msg:'putProducto',
        body
    })
}


export const deleteComunidad=(req:Request, res:Response)=>{
    const {idProducto}=req.params;
    res.json({
        msg:'deleteProducto',
        idProducto
    })
}


/*
[
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
    },
    {
        "name": "Parque solar en la ciudad de Santiago",
        "description": "Parque solar en lo alto de los Andes",
        "type": "Energía solar",
        "image": "../../assets/images/3.jpg"
    }
]
    
*/