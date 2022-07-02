import Server from './app';
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyD0ugc1KdIhvyZgP8Qf0ZGfIvLhuvlIUBI",

  authDomain: "proyectoweb-2be9e.firebaseapp.com",

  projectId: "proyectoweb-2be9e",

  storageBucket: "proyectoweb-2be9e.appspot.com",

  messagingSenderId: "606145529960",

  appId: "1:606145529960:web:3db1b9ffc60598902653dd",

  measurementId: "G-G4EQHTRPD1",

  databaseURL: "https://proyectoweb-2be9e-default-rtdb.firebaseio.com/",

};

// Initialize Firebase

const appDatabase = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(appDatabase);

// Initialize api server
const server=new Server();
server.listen();

// exports
export {database , server};
