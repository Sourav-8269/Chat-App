const express=require("express");

const {chats}=require("../Data/data");

require("dotenv").config();

const ChatRouter=express.Router();

const {chatModel}=require("../Models/chat.model");
const { userModel } = require("../Models/user.model");

ChatRouter.get("/",async(req,res)=>{
    // console.log(req.body)
    try{
        chatModel.find({users:{$elemMatch:{$eq:req.body.userID}}})
        .populate("users","-password")
        .populate("groupAdmin","-password")
        .populate("recentMessage")
        .sort({updatedAt:-1})
        .then(async(result)=>{
            result=await userModel.populate(result,{
                path:"recentMessage.sender",
                select:"name profile email"
            })
            res.send(result)
        });
    }catch(err){
        res.status(400);
        throw new Error(err.message);
    }
})

ChatRouter.post("/",async (req,res)=>{
    // This id is whose chats you want
    const {Chats_id}=req.body;
    const {userID}=req.body;
    console.log("Whose Chats I want",Chats_id);
    console.log("Login Person",userID)
    if(!Chats_id){
        res.send("UserID param not sent with request");
        return;
    }

    let chats=await chatModel.find({
        isGroup:false,
        $and:[
            {users:{$elemMatch:{$eq:userID}}},
            {users:{$elemMatch:{$eq:Chats_id}}},
        ],
    })
    .populate("users","-password")
    .populate("recentMessage");
    // console.log(chats);

    chats=await userModel.populate(chats,{
        path:"recentMessage.sender",
        select:"name profile email"
    })

    // console.log(chats)
    if(chats.length>0){
        res.send(chats[0]);
    }else{
        var newChat={
            chatName:"sender",
            isGroupChat:false,
            users:[userID,Chats_id]
        }
        // console.log(newChat);
        try{
            const createdChat=await chatModel.create(newChat);
            // console.log(createdChat);
            const FullChat=await chatModel.findOne({_id:createdChat._id}).populate("users","-password");
            res.send(FullChat);

        }catch(err){
            res.status(400);
            throw new Error(err.message);
        }
    }

})

ChatRouter.post("/addGroup",(req,res)=>{
    if(req.body.users&&req.body.name){
        
    }
})

ChatRouter.get("/:id",(req,res)=>{
    let SingleChat=chats.find((el)=>el._id==req.params.id);
    res.send(SingleChat);
})

module.exports={ChatRouter};

