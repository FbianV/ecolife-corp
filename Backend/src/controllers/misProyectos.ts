import {Request, Response} from 'express';

export const getProyectos=(req:Request, res:Response)=>{
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
export const getProyecto=(req:Request, res:Response)=>{
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



export const postProyecto=(req:Request, res:Response)=>{
    const {body}=req;
    res.json({
        msg:'postProducto',
        body
    })

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
