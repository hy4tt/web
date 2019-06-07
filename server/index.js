var express = require('express');
var app = express();
var logger = require('morgan');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Person = require('./model');

mongoose.connect('mongodb://localhost:27017/webapp', {useNewUrlParser: true});

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger());
app.use(cors());


var port = 3000;

// Person.create({name: 'Matt Olsen', age: 19});

app.get('/', function(req, res){
    res.json({matt: 'Some new stuff'})
});

app.get('/names', function(req, res){
    Person.find({}, function(err, resp){
        if (err){
            console.log(err);
            
        } else {
            res.send(resp);
        }
    })
});

app.listen(port, function(){
    console.log('Server running on port' +port);
});