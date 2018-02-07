// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',
(err, database) => {
    const db = database.db('TodoApp');
    if(err) {
     return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').deleteMany({text: 'Eat Lunch'})
    // .then(result => console.log(result));

    // db.collection('Todos').deleteOne({text: 'Eat Lunch'})
    // .then(res => console.log(res));

    // db.collection('Todos').findOneAndDelete({completed: false})
    // .then(res => console.log(res));

    // db.collection('Users').deleteMany({name: 'Jluis'})
    // .then(res => console.log(res));

    // db.collection('Users').findOneAndDelete({
    //     _id: ObjectID("5a7b13ee15a6a53fa74f5ce6")
    // }).then(res => console.log(res));
    
    // database.close();
});