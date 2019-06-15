const express = require('express');   // including express js 
const path = require('path');   //accessing path module
const port = 8000; // defining port 
const db= require('./config/mongoose'); // accessing datebase
const task = require('./models/task');  //including database schema
var bodyParser = require('body-parser'); // adding body parser to project

const app = express(); // object of express module
app.use(bodyParser.urlencoded({extended: true})); //object using body parser

app.set('view engine','ejs');  //  setting up ejs as a view engine
app.set('views',path.join(__dirname,'views'));  // setting up default view path


app.use(express.urlencoded()); // object using url encoder
app.use(express.static('assets')); // accessing static files


// get request rendering the home page
app.get('/',function(req,res){
    task.find({/*find using condition like name: 'naman' */}, function(err, tasks){
        if(err){
            console.log('error in fetching db');
            return;
        }

        return res.render('home',{title: "Todo App", task_list: tasks });
    });
});


// post request adding task and returning to home page
app.post('/create-task', function(req,res){
    
    task.create({
        task : req.body.task,
        date : req.body.date,
        category : req.body.category
         
        
    },function(err, newTask){
        if(err){
            console.log('error in creating task');
            return;
        }

        console.log('*******',newTask);
        return res.redirect('back');
    
    });
});


// post request for deleting list items
app.post('/taskList',function(req,res){

        let id=req.body.task;  // fetching id of checked items

        if(Array.isArray(id) == false){
        
            task.findByIdAndDelete(id,function(err){
                if(err){
                    console.log("error in deleting from database");
                    return;
                }
                
            return res.redirect('back');
            });

        }

        else if(Array.isArray(id)){
            for(let i=0;i<id.length;i++){
                task.findByIdAndDelete(id[i],function(err){
                    if(err){
                        console.log("error in deleting from database");
                        return;
                    }
                    
                
                });
            }
            return res.redirect('back');
        }

       
    
    

});

app.listen(port,function(err){
    if(err){
        console.log("Error in server in port :",port);

    }

    console.log("server is running on port: ",port);
});