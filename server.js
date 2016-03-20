var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require('morgan');
var PORT = 8080;

/*Mongoose Connect*/

mongoose.connect('mongodb://localhost/garageSale');
var db = mongoose.connection;
db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});
db.once('open', function() {
  console.log('Mongoose connection successful.');
});

var User = require('./models/User.js');
var Item = require('./models/Item.js');
var Comment = require('./models/Comment.js');
var Schema = mongoose.Schema;
var Article = new Schema({
  article: {type:String, unique:true},
  notes: [{
    type: Schema.Types.ObjectId,
    ref:'Note'
  }]
});


var Title = mongoose.model('Title', Article);
var ReviewSchema = new Schema({
  noteReview: {
    type:String
  }
});
var Note = mongoose.model('Note', ReviewSchema);


app.use(logger('dev'));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get("/", function(res, req){
  res.send(index.html)
})




app.listen(PORT, function() {
  console.log("listening on port:" + PORT);
});
