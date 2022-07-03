import Server from './app';
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

import { config } from './enviorements';
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: config.apiKey,

  authDomain: config.authDomain,

  projectId: config.projectId,

  storageBucket:  config.storageBucket,

  messagingSenderId: config.messagingSenderId,

  appId: config.appId,

  measurementId: config.measurementId,

  databaseURL: config.databaseURL

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
