var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
    _user: {
       type: Schema.Types.ObjectId,
        ref: 'User'
      },
    name : {
      type:String,
      required:true
    },
    description: {
      type:String,
      required:true
    },
    price:String,
    bought:{type: Boolean, default:false},
    comment:
      [{
       type : Schema.Types.ObjectId,
        ref : 'Comment'
      }]
});
var Item = mongoose.model('Item', itemSchema);
module.exports =  Item;
