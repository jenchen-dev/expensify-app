import firebase from 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyDg4SvoQ3kY-SNNMcGAR8ontV6IHedwqhI",
    authDomain: "expensify-app-20880.firebaseapp.com",
    databaseURL: "https://expensify-app-20880-default-rtdb.firebaseio.com",
    projectId: "expensify-app-20880",
    storageBucket: "expensify-app-20880.appspot.com",
    messagingSenderId: "749217334760",
    appId: "1:749217334760:web:ff3f43af7e3434879c105d"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };
