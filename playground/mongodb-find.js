// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',
(err, database) => {
    const db = database.db('TodoApp');
    if(err) {
     return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //     _id: new ObjectID("5a7b0f20e402fb3098568d7d")
    //  }).toArray()
    // .then(docs => console.log('Todos: \n', JSON.stringify(docs,undefined,2)),
    //     err => console.log('Unable to fetch todos', err));

    // db.collection('Todos').find().count()
    // .then(count => console.log(`Todos Count: ${count}`),
    //     err => console.log('Unable to fetch todos', err));


    db.collection('Users').find({name: 'Jluis'}).toArray()
    .then(docs => console.log(JSON.stringify(docs,undefined,2)),
    err => console.log('Failed to fetch', err)
);
    // database.close();
});