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

// Add new data
database.ref().set({
    name: 'Jean Chen',
    age: 27,
    isSingle: true,
    location: {
        city: 'Taipei',
        country: 'Taiwan'
    },
}).then(() => {
    console.log('This data is saved!')
}).catch((err) => {
    console.log('Fail to update data.', err)
});


// Remove certain data
database.ref('isSingle').remove()
    .then(() => {
        console.log('Remove succeeded.')
    })
    .catch((err) => {
        console.log('Remove failed: ', err)
    });


// Update data (only update root level, not nested one)
database.ref().update({
    name: 'Alice', //更新
    job: 'Sofeware Developer', //新增
    isSingle: null, //刪除
    'location/city': 'Hualian' //更新巢狀列表裡的其一資訊
});


// Fetch data (for once only)
database.ref()
    .once('value')
    .then((snapshot) => {
        const val = snapshot.val();
        console.log(val);
    })
    .catch((err) => {
        console.log('Error fetching data', err);
    });


// Fetch data (with subscribe)
const onValueChange = database.ref().on('value', (snapshot) => {
    const val = snapshot.val();
    console.log(`${val.name} is a ${val.job} from ${val.location.country}.`);
});


// Cancel subscription
database.ref().off('value', onValueChange);


//-----[Array Data in Firebase]-----

// Add data
database.ref('expenseList').push({
    description: 'Dinner',
    note: 'for party',
    amount: 1500,
    createdAt: '2021-08-31'
});


// Transform firebase data to array data structure (run once)
database.ref('expenseList')
    .once('value')
    .then((snapshot) => {
        const expenses = [];
        snapshot.forEach((childSnapshot) => {
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });

        console.log(expenses);
    });


// Transform firebase data to array data structure (with subscribe)
database.ref('expenseList').on('value', (snapshot) => {
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
    });
    console.log(expenses);
});


// Called when content removed, changed or added
database.ref('expenseList').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

database.ref('expenseList').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

database.ref('expenseList').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});
