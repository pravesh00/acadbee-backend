const mongoose=require('mongoose');

const commentSchema= mongoose.Schema({
    profileId:String,
    comment:String,
    profilePic:String,
    name:String,
    bookId:String,
},{
    timestamps:true
});

 module.exports=mongoose.model('comment',commentSchema);