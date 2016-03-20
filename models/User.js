var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username : {
      type : String,
      required : true,
    },
    password:{
      type:String, 
      require:true
    },
    bank:{
      type:Number,
      default:1000
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

