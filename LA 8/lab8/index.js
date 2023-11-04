const express=require('express');
const mongoose=require('mongoose');

const url='mongodb://127.0.0.1:27017/stuentDB';
const app=express();

mongoose.connect(url,{
    useNewUrlParser:true
})
const  con=mongoose.connection

con.on('open',function(){
    console.log("connected to mongodb");
})
app.listen(3000,function(){
    console.log("Server started at 3000");
})