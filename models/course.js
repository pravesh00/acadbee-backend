const mongoose=require('mongoose');
const ratingModel=require('../models/rating')


const courseSchema= mongoose.Schema({
   courseId:{
       type:String,
       required:true
   },
   instructorId:{
       type:String,
       required:true
   },
   instructorName:{
       type:String,
       required:true
   },
   booksCount:{
       type:Number,
       default:0
   },
          
},{
    timestamps:true
});

 module.exports=mongoose.model('course',courseSchema);