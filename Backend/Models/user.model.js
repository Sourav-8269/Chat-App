const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
    profile:{
        type:String,
        default:"https://www.nicepng.com/png/detail/933-9332131_profile-picture-default-png.png"
    }
},
{timestamps:true}
)

const userModel=mongoose.model("User",userSchema);

module.exports={userModel};