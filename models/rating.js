const mongoose=require('mongoose');

const ratingSchema= mongoose.Schema({
    ratedById:{type:String,required:true},
    prefScale: Number,
    knowScale: Number,
    compreScale:Number,
    exercScale:Number,
    lengthScale:Number,
},{
    timestamps:true
});

 module.exports=mongoose.model('rating',ratingSchema);