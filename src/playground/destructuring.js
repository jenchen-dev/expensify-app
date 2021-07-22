// Object destructuring
const person = {
    name: 'Jean',
    age: 25,
    location: {
        city: 'Taipei',
        temp: 30
    }
};

// 1) Set default value
const { name, age, greet='hello' } = person;
console.log(`${name} is ${age} year(s) old and says ${greet}`);

// 2) Rename properties
const { city, temp: temperature } = person.location;
console.log(`It's ${temperature} in ${city}.`);


const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Pengiun'
    }
};

const { name: publisherName = 'Self-published' } = book.publisher;
console.log(publisherName);

//------------------------------------

// Array destructuring
const address = ['1299 S Juniper Street', 'Los Angeles', , '12555'];

const [street, cityName, state='New Jersey', zip] = address;
console.log(`You are in ${cityName}, ${state}`);

const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);
