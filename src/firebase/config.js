import firebase from 'firebase'
const firebaseConfig={

    apiKey: "AIzaSyAHFTgSUfwTcigubtx-ouFHBNqmkQUjdfw",
    authDomain: "fifer-86be0.firebaseapp.com",
    databaseURL: "https://fifer-86be0.firebaseio.com",
    projectId: "fifer-86be0",
    storageBucket: "fifer-86be0.appspot.com",
    messagingSenderId: "951187930876",
    appId: "1:951187930876:web:37324673141f019c71a179"

}
firebase.initializeApp(firebaseConfig);

export const auth= firebase.auth();

export default firebase;