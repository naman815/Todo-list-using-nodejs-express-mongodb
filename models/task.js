// schema for database 

const mongoose = require('mongoose'); // accessing mongoose

const taskSchema = new mongoose.Schema({
    task :{
        type : String,
        required : true
    },

    category :{
        type : String,
        required : true
    },

    date :{
        type : Date,
        default : Date.now,
        required : true
    }
});

const task = mongoose.model('Task',taskSchema);
module.exports= task;