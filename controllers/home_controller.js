const TaskList = require('../models/task');

//controller for home page
module.exports.home = function(req, res){
          TaskList.find({}, function(err, task){
                    if(err){
                              console.log('error in fetching data',err);
                              return;
                    }
                     return res.render('home',{
                              title : "todo",
                              todo_list : task
                     });
          });
};

//controller for adding task    
module.exports.add = function(req, res){
          try{
                    console.log(req.body);
                    TaskList.create(req.body, function(err, task){
                              if(err){console.log('error in adding data', err); return;}
                              console.log(task);
                              return res.redirect('/');
                    });
          }
          catch(err){
                    console.log(err);
          }
          
}

//controller for deleting task
module.exports.delete = function(req, res){
          //id of selected checkbox
          let id = req.query;
          console.log(id);

          //length of selectd checkbox
          let checkboxes = Object.keys(id).length;

          //loop over selected boxes
          for(let i=0; i<checkboxes; i++){
                    //find the task in db by id and delete 
                    TaskList.findByIdAndDelete(Object.keys(id)[i], function(err){
                              if(err){
                                        console.log('error in deleting the item',err);
                                        return;
                              }
                    })
          }
          return res.redirect('back');
}