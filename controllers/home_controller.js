const TaskList = require('../models/task');

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
}

                              
module.exports.add = function(req, res){
          TaskList.create(req.body, function(err, task){
                    if(err){console.log('error in adding data', err); return;}
                    console.log(task);
                    return res.redirect('/');
          });
}


module.exports.delete = function(req, res){
          let id = req.query;
          console.log(id);

          let checkboxes = Object.keys(id).length;

          for(let i=0; i<checkboxes; i++){
                    TaskList.findByIdAndDelete(Object.keys(id)[i], function(err){
                              if(err){
                                        console.log('error in deleting the item',err);
                                        return;
                              }
                    })
          }
          return res.redirect('back');
}