const express=require("express");
const router=express.Router();
const bookModel=require('../models/book');
const crypto=require('../utils/uniqueId');
const verifyToken=require('../utils/verifytoken');

//add a new book
router.post('/',verifyToken,async(req,res)=>{

    const bookID= 'B0'+crypto;
    const book=await new bookModel({
        bookName:req.body.bookName,
        bookId:bookID,
        photo:req.body.photo,
        author:req.body.author,
        year:req.body.year,
        uploadFile:req.body.uploadFile,
        link:req.body.link,
        price:req.body.price,
        sampleFile:req.body.sampleFile,
        category:req.body.category,
        courseId:req.body.courseId,
    })

    await book.save().then((a)=>{
        res.status(201).json(a);

        console.log("Book Added")
    }).catch((err)=>{
        res.status(500).json({
            error:err,
            success:false
        })
    })});


router.get('/:courseId',verifyToken,async (req,res)=>{
    const books=await bookModel.find({courseId:req.params.courseId}).then((a)=>{
        res.json(a)

    });

})

module.exports=router;
