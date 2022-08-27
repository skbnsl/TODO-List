const express = require('express');
const port = 5000;
const db = require('./config/mongoose');

const app = express();

//for checking 
// app.get('/home', function(req, res){
//           res.send('<h1>COOL!</h1>');
// });


//set up view engine as ejs
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('./assets'));

app.use(express.urlencoded());

app.use('/',require('./routes/index'));


app.listen(port, function(err){
          if(err){comnsole.log('error in running the server'); return;}
          
          console.log('server is running on port', port);
});