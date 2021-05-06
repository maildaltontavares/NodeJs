
var express = require('express'); 
var consign = require('consign');
var bodyParser = require('body-parser')
var cors = require('cors');

var app = express();
app.set('view engine','ejs');
app.set('views','app/views');
 

app.use(bodyParser.urlencoded({extended: false})); 
app.use(bodyParser.json());
app.use(cors());

consign()
.include("./app/controllers") 
.then("./app/rotas")  
.into(app);  
 

module.exports = app;



