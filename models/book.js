const mongoose= require('mongoose')

const bookSchema=mongoose.Schema({
    bookName:{
        type:String,
        required:true
    },
    bookId:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:false
    },
    author:{
        type:String
    },
    year:{
        type:String
    },
    uploadFile:{
        type:String
    },
    link:{
        type:String
    },
    price:{
        type:Number,
        default:0
    },
    sampleFile:{
        type:String
    },
    category:{
        type:Boolean,
        default:true
    },
    courseId:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

module.exports=mongoose.model('book',bookSchema)