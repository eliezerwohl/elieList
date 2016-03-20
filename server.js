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

app.listen(PORT, function() {
  console.log("listening on port:" + PORT);
});
