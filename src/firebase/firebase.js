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

database.ref().set({
    name: 'Jean Chen',
    age: 27,
    isSingle: true,
    location: {
        city: 'Taipei',
        country: 'Taiwan'
    },
});

database.ref('age').set(30);
database.ref('location/city').set('Hualian');
database.ref('attributes').set({
    height: 155,
    weight: 43
});
