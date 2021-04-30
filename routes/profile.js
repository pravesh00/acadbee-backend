const express=require('express');
const router=express.Router();
const profileModel=require('../models/profile');
const bcrypt=require('bcryptjs')

const jwt=require('jsonwebtoken');
const config=require('../config')
const verifyToken=require('../utils/verifytoken');


//signup API
router.post('/',async(req,res)=>{

    const profile= await new profileModel({
        name:req.body.name,
        username:req.body.username,
        instituteName:req.body.instituteName,
        yearStart:req.body.yearStart,
        yearEnd:req.body.yearEnd,
        password:bcrypt.hashSync(req.body.password,8) 
      })

    await profile.save().then((a)=>{
        res.status(201).json(a);

        console.log("Registered")
    }).catch((err)=>{
        res.status(500).json({
            error:err,
            success:false
        })
    })});

router.get('/',verifyToken,async(req,res)=>{
    try{
        const profiles = await profileModel.find()
        res.json(profiles)
 }catch(err){
     res.send('Error ' + err)
 }
})


//signin API
router.post('/:username',async(req,res)=>{
    try{
    profileModel.findOne({username:req.params.username}).exec().then((user)=>{
        if(user!=null){
        const passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password);
        const token=jwt.sign({username:user.username,name:user.name},config.secret,{
            expiresIn:86400
        })
        if(passwordIsValid){
            res.status(201).send({message:"Auth Successful",token:token})
          }
        }
        else{
            res.status(201).send("Auth failed")
        }
    })}
    catch(err){
            res.status(500).json({
                error:err,
                success:false
            })
    }
  
    
})
 
module.exports=router;



