const mongoose = require('mongoose');

//define schema
const listSchema = new mongoose.Schema({
          //description of the task
          description : {
                    type : String,
                    required : true
          },
          //category of task
          category : {
                    type : String,
                    required : true
          },
          //due-date of the task 
          date : {
                    type : String,
                    required : true
          }
});

const TaskList = mongoose.model('TaskList', listSchema);

module.exports = TaskList;