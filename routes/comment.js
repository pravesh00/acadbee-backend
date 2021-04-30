const express=require("express");
const router=express.Router();
const commentModel=require('../models/comment');

router.post('/', async(req,res)=>{
    const comment = new commentModel({
        profileId:req.body.profileId,
        comment:req.body.comment,
        name:req.body.name,
        profilePic:req.body.profilePic,
        bookId:req.body.bookId
    });
    await comment.save().then((a)=>{
        res.status(201).json(a);

        console.log("Comment Added")
    }).catch((err)=>{
        res.status(500).json({
            error:err,
            success:false
        })
    })});

router.get('/', async(req,res)=>{
    try{
        const comments = await commentModel.find()
        res.json(comments)
 }catch(err){
     res.send('Error ' + err)
 }
})

router.get('/:bookId/:profileId', async(req,res)=>{
    try{
        const comments = await commentModel.find({
        bookId:req.params.bookId,
        profileId:req.params.profileId
        })
        res.json(comments)
 }catch(err){
     res.send('Error ' + err)
 }
})

module.exports=router;