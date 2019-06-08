const express = require('express');
const path = require('path');
const port = 8000;
const db= require('./config/mongoose');
const task = require('./models/task');

const app = express();

//use express router
app.use('/',require('./routes'));

var Task = [
    {
        task : "Lets make todo app",
        date : "MAY 2, 2019",
        category : "personal"
    }
];

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

// app.get('/',function(req,res){
//     task.find({/*find using condition like name: 'naman' */}, function(err, tasks){
//         if(err){
//             console.log('error in fetching db');
//             return;
//         }

//         return res.render('home',{title: "Todo App", task_list: tasks });
//     });
// });

// app.post('/create-task', function(req,res){
    
//     task.create({
//         task : req.body.task,
//         date : req.body.date,
//         category : req.body.category
         
        
//     },function(err, newTask){
//         if(err){
//             console.log('error in creating task');
//             return;
//         }

//         console.log('*******',newTask);
//         return res.redirect('back');
    
//     });
// });

app.listen(port,function(err){
    if(err){
        console.log("Error in server in port :",port);

    }

    console.log("server is running on port: ",port);
});