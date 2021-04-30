const express = require('express');
const app=express();
require('dotenv/config')
const morgan=require('morgan');
const mongoose=require('mongoose');


app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });


const api=process.env.API_VER;

app.use(express.json());
app.use(morgan('tiny'));

mongoose.connect(process.env.CONNECTION_STRING)
.then(()=>{
    console.log("Database Connected");
});

//Rating api
const ratingRouter = require('./routes/rating')
app.use('/rating',ratingRouter)

//Comment api
const commentRouter = require('./routes/comment')
app.use('/comment',commentRouter)

//Course api
const courseRouter = require('./routes/course')
app.use('/course',courseRouter)

//Book API
const bookRouter = require('./routes/book')
app.use('/book',bookRouter)
