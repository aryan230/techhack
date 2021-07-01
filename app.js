const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/' , function(req , res){
    res.render('landing', {is: 0});
});

app.listen(3000 , function(){
    console.log('Server Started on Port 3000')
});