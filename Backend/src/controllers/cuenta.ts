import {Request, Response} from 'express';
import {database} from '../index';
import {ref, onValue, set } from "firebase/database";
import { usuario } from "../models/usuarios";
import { getAuth, createUserWithEmailAndPassword, confirmPasswordReset,signInWithEmailAndPassword,updateProfile } from "firebase/auth";





export const getCuenta=(req:Request, res:Response)=>{
    const {query}=req;
    const email:string = query.email?.toString() ||'';
    const password:string = query.password?.toString() ||'';
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log("Signed in");
        const user = userCredential.user;
        // ...
        res.status(200).send({ error:'', message:{email: user.email , name:user.displayName }} );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        res.status(400).send({ error: errorMessage, message:{}} );
        console.log("Signed in error");
      })
}

export const postCuenta=(req:Request, res:Response)=>{
    const {body}=req;
    const email:any = body.email ||'';
    const password:any = body.password ||'';
    const name:any = body.name ||'';
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      updateProfile(user, {
        displayName: name
      }).then(() => {
        // Profile updated!
        console.log("Profile updated!");
        // ...
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // An error occurred
        console.log("Profile updated!");
        // ...
    });
    // ...
    res.status(200).send({ error:'', message:{ email: email }} );
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log("Signed up error");
    console.log("errorCode",errorCode);
    console.log("errorMessage",errorMessage);
  });


}
