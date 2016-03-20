var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name : {
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
    }
    createdDate : {
      type : Date,
      default : Date.now()
    },
    item : [{
       type : Schema.Types.ObjectId,
        ref : 'Item'
      }]
});

module.exports = mongoose.model('User', userSchema);

