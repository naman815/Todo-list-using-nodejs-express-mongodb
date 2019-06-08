const task = require('../models/task');

module.exports.home = function(req,res){
    task.find({/*find using condition like name: 'naman' */}, function(err, tasks){
        if(err){
            console.log('error in fetching db');
            return;
        }

        return res.render('home',{title: "Todo App", task_list: tasks });
    });
}