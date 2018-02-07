// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',
(err, database) => {
    if(err) {
     return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB server');

    const db = database.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false

    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert Todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name:'Jluis',
    //     age: 22,
    //     location: 'Chicago, IL'
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert User',err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    database.close();
});