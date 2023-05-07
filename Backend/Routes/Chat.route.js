const express=require("express");

const {chats}=require("../Data/data");

require("dotenv").config();

const ChatRouter=express.Router();

ChatRouter.get("/",(req,res)=>{
    res.send(chats)
})

ChatRouter.get("/:id",(req,res)=>{
    let SingleChat=chats.find((el)=>el._id==req.params.id);
    res.send(SingleChat);
})

module.exports={ChatRouter};

