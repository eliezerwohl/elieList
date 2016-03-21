var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require('morgan');
var PORT = 8080;

/*Mongoose Connect*/

var db = 'mongodb://localhost/garageSale';
mongoose.connect(db);

var User = require('./models/User');
var Item = require('./models/Item');
var Comment = require('./models/Comment');

app.use(logger('dev'));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get("/", function(res, req){
  res.send(index.html)
})

app.post('/user', function(req, res) {
  req.body.username = req.body.username.toLowerCase();
  User.findOne({
      'username': req.body.username
    })
     .exec(function(err, user) {
      if (err) {
        console.log('error');
        res.send(err);
      } else {
        if (user === null) {
          console.log(req.body);
          var newUser = new User(req.body);
          newUser.save(function(err, newUser) {
            if (err) {
              console.log(err);
              res.send(err);
            } else {
              res.send(newUser);
            }
          });
        } else {
          console.log(user);
          res.send(user);
        }

      }
    });
});


app.post('/newItem/', function(req, res) {
  debugger

  var newItem = new Item(req.body);
  console.log(newItem)
  newItem.save(function(err, newItem) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send(newItem);
    }
  });
});

app.get("/items", function(req, res) {
  console.log(req.body);
  Item.find(function(err, docs){
    if (err){
      console.log(err);
      res.send(err);
    } else {
      res.send(docs);
    }
  });
});


app.post('/sell/:id', function(req, res) {
  debugger;
var id = req.params.id;

Item.update({_id: id}, {
    bought: true
}, function(err, numberAffected, rawResponse) {
   //handle it
})


});

app.listen(PORT, function() {
  console.log("listening on port:" + PORT);
});
