import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: 'AIzaSyCOu8rpZu9Csqh_x21dBFJqKGK0VdiG1kA',
    authDomain: 'meal-prep-5c741.firebaseapp.com',
    databaseURL: 'https://meal-prep-5c741.firebaseio.com',
    projectId: 'meal-prep-5c741',
    storageBucket: 'meal-prep-5c741.appspot.com',
    messagingSenderId: '998812489069'
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const DB = firebase.database();
export default firebase;
