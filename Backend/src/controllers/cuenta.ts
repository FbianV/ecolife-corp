import {Request, Response} from 'express';
import {database} from '../index';
import {ref, onValue, set } from "firebase/database";
import { usuario } from "../models/usuarios";
import { getAuth, createUserWithEmailAndPassword, confirmPasswordReset,signInWithEmailAndPassword } from "firebase/auth";





export const getCuenta=(req:Request, res:Response)=>{
    const {query}=req;
    const email:any = query.email ||'';
    const password:any = query.password ||'';
    const auth = getAuth();
    console.log(query);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        //console.log(user);
        // ...
        res.status(200).send({ error:'', message:{email }} );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Signed in error");
      })
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
