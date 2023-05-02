const mongoose=require("mongoose");

const messageSchema=mongoose.Schema({
    chat:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Chat"
    },
    sender:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    message:{
        type:String,
        trim:true
    }
},
{timestamps:true}
);

const messageModel=mongoose.model("Message",messageSchema);

module.exports={messageModel};
