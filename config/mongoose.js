//require library
const mongoose= require('mongoose');

//connect to database
mongoose.connect('mongodb://localhost/todo_list');

//check connection
const db = mongoose.connection;

//error
db.on('error',console.error.bind(console,'error connecting to db'));

//up and runnung then printing msg
db.once('open',function(){
    console.log('successfully connected to database');
});