const express=require("express");
const { chats } = require("./Data/data");

const app=express();

require('dotenv').config()

app.get("/",(req,res)=>{
    res.send("Welcome to My App");
})

app.get("/chats",(req,res)=>{
    res.send(chats)
})

app.get("/chats/:id",(req,res)=>{
    let SingleChat=chats.find((el)=>el._id==req.params.id);
    res.send(SingleChat);
})

app.listen(process.env.port,()=>{
    try{
        console.log("Connected to DB");
    }catch(err){
        console.log("Something went wrong");
    }
})