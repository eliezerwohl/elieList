var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require('morgan');
var PORT = 8080;

/*Mongoose Connect*/
var db = 'mongodb://localhost/garagesale';
mongoose.connect(db);

// var User = require('./models/User');
// var Expense = require('./models/Expense');

app.use(logger('dev'));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get("/", function(res, req){
  res.send(index.html)
})




app.listen(PORT, function() {
  console.log("listening on port:" + PORT);
});
