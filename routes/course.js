const express=require("express");
const router=express.Router();
const courseModel=require('../models/course');
const verifyToken=require('../utils/verifytoken');

//add a new course
router.post('/', async(req,res)=>{
    const course = new courseModel({
        courseId:req.body.courseId,
        instructorId:req.body.instructorId,
        instructorName:req.body.instructorName
    });
    await course.save().then((a)=>{
        res.status(201).json(a);

        console.log("Course Added")
    }).catch((err)=>{
        res.status(500).json({
            error:err,
            success:false
        })
    })});

    
//get all courses available
router.get('/',verifyToken, async(req,res)=>{
    try{
    
        const courses = await courseModel.find()
        res.json(courses)
 }catch(err){
     res.send('Error ' + err)
 }
})

//get a particular course with courseId
router.get('/:courseId', async(req,res)=>{
    try{
        const course = await courseModel.find({courseId:req.params.courseId})
        res.json(course)
 }catch(err){
     res.send('Error ' + err)
 }
})


//increase a bookcount of a particular courseId
router.get('/:courseId/addBook', async(req,res)=>{
    try{
        const course = await courseModel.findOne({courseId:req.params.courseId},(err,user)=>{
            console.log(courseModel.booksCount);
            user.booksCount=user.booksCount+1;
            const c1= user.save();
            res.json(user);
        });
        
 }catch(err){
     res.send('Error ' + err)
 }
})

//delete a course with a particular courseId
router.delete('/:courseId',async(req,res)=>{
    const course=courseModel.findOneAndDelete({courseId:req.params.courseId}).then(()=>{
        console.log("Course Deleted");
        res.send("Deleted");
    })
})

module.exports=router;