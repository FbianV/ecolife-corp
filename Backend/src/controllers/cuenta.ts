import {Request, Response} from 'express';
import {database} from '../index';
import {ref, onValue, set } from "firebase/database";
import { usuario } from "../models/usuarios";
import { getAuth, createUserWithEmailAndPassword, confirmPasswordReset,signInWithEmailAndPassword } from "firebase/auth";





export const getCuenta=(req:Request, res:Response)=>{
 const {body}=req;
  const auth = getAuth();
  signInWithEmailAndPassword(auth, body.email, body.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
      res.status(200).send({ error:'', message:'Usuario logeado' } );
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Signed in error");
    });
    /*const {params}=req;
    const auth = getAuth();
    console.log(req);
    signInWithEmailAndPassword(auth, params.email, params.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        //console.log(user);
        // ...
        res.status(200).send({ error:'', message:'Usuario logeado' } );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Signed in error");
      })*/
}

export const postCuenta=(req:Request, res:Response)=>{
    const {body}=req;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, body.email, body.password)
    .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
    console.log("Signed up");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log("Signed up error");
  });


}
