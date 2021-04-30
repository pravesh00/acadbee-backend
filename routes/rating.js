const express=require("express");
const router=express.Router();
const ratingModel=require('../models/rating');

//add a new rating to a particular book or course
router.post('/', async(req,res)=>{
    const rating = new ratingModel({
        ratedById:req.body.ratedById,
    });
    await rating.save().then((a)=>{
        res.status(201).json(a);

        console.log("Product Added")
    }).catch((err)=>{
        res.status(500).json({
            error:err,
            success:false
        })
    })});



router.get('/', async(req,res)=>{
    try{
        const ratings = await ratingModel.find()
        res.json(ratings)
 }catch(err){
     res.send('Error ' + err)
 }
})

router.get('/:ratedById', async(req,res)=>{
    try{
        const rating = await ratingModel.find({ratedById:req.params.ratedById})
        res.json(rating)
 }catch(err){
     res.send('Error ' + err)
 }
})

module.exports=router;