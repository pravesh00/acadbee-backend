const mongoose= require('mongoose')

const profileSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:false,
        default:""
    },
    instituteName:{
        type:String,
        required:true
    },
    yearStart:{
        type:Number
    },
    yearEnd:{
        type:Number
    },
    status:{
        type:String,
        default:"Not Verified"
    },
    password:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('profile',profileSchema);