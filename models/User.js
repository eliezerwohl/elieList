var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name : {
      type : String,
      required : true,
    },
    password : {
      type : Number,
    },
    createdDate : {
      type : Date,
      default : Date.now()
    },
    item : [{
       type : Schema.Types.ObjectId,
        ref : 'Item'
      }]
});

var User = mongoose.model('User', userSchema);
module.exports = User;
