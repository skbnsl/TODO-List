//require express module
const express = require('express');
const port = 5000;

//require database module
const db = require('./config/mongoose');

const app = express();

//set up view engine as ejs
app.set('view engine', 'ejs');
app.set('views', './views');

//used static  file
app.use(express.static('./assets'));

//middleware to read url request
app.use(express.urlencoded());

//used express routes
app.use('/',require('./routes/index'));

//app listen on port
app.listen(port, function(err){
          if(err){comnsole.log('error in running the server'); return;}
          
          console.log('server is running on port', port);
});