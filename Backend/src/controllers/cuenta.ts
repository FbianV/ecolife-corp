import {query, Request, Response} from 'express';
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
export const isLogCuenta=(req:Request, res:Response)=>{
  const auth = getAuth();
  const user = auth.currentUser;
  console.log(1);
 
 
  if (user) {
    const name = user.displayName?.toString() ||'';
    console.log(name);
    console.log(2);
    res.status(400).send({ error:'',message:true});
  }
  else {
    console.log(3);
    res.status(400).send({ error:'Sin usuario logeados',message:false});
    // No user is signed in.
  }

}

export const updateCuenta=(req:Request, res:Response)=>{
  const {body}=req;
  const nombre:any = body.name ||'';

  const auth = getAuth() as any;
  updateProfile(auth.currentUser, {
  displayName: nombre
  }).then(() => {
  // Profile updated!
  const user = auth.currentUser;
  // ...
  console.log(user.displayName);
  res.status(200).send({ error:'', message:{name: nombre }} );
  }).catch((error) => {
  // An error occurred
  // ...
  });

  
}