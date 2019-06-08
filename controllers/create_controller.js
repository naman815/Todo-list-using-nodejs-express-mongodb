const task = require('../models/task');


module.exports.Task = function(req,res){
    
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
}