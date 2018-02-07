// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',
(err, database) => {
    const db = database.db('TodoApp');
    if(err) {
     return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: ObjectID("5a7b2adead2274c3a5f450d9")
    // },{
    //     $set: {
    //         completed: true
    //     }
    // },{
    //     returnOriginal: false
    // })
    // .then(res => console.log(res));

    // db.collection('Users').findOneAndUpdate({
    //     _id: ObjectID("5a7b10b4c5a8a935775ff2dd")
    // },
    // {
    //     $set: {
    //         name: 'JLuis'
    //     },
    //     $inc: {
    //         age: -10
    //     }
    // }, {
    //     returnOriginal: false
    // }).then(res => console.log(res));

    // database.close();
});