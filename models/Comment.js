var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    _item: {
       type: Schema.Types.ObjectId,
        ref: 'item'
      },
    comment : {
      type:String,
      required:true
    }
});

module.exports =  mongoose.model('Comment', commentSchema);