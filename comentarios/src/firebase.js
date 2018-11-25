import firebase from 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyDheJ6yUyXNdnn0NhWGTfNn_0rQLAoK4So",
    authDomain: "comments-9c62e.firebaseapp.com",
    databaseURL: "https://comments-9c62e.firebaseio.com",
    projectId: "comments-9c62e",
    storageBucket: "comments-9c62e.appspot.com",
    messagingSenderId: "1083827350596"
  };
  firebase.initializeApp(config);

  export const database = firebase.database();
  // export const auth = firebase.auth