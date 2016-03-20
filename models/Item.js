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
    bought:{
      { type: Boolean, default:0 },
    }
});

var Item = mongoose.model('Item', itemSchema);
module.exports = Item;