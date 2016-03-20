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

var Comment = mongoose.model('Comment', commentSchema);
module.exports =  Comment;