const express=require("express");

const UserRouter=express.Router();

require("dotenv").config();

const {userModel}=require("../Models/user.model");

const bcrypt=require("bcrypt");

const jwt=require("jsonwebtoken")

UserRouter.get("/",async (req,res)=>{
    const user=await userModel.find();
    res.send(user);
})

UserRouter.post("/userbyemail",async (req,res)=>{
    const {email}=req.body;
    const user=await userModel.find({email});
    res.send(user);
})

UserRouter.post("/register",async(req,res)=>{
    // console.log(req.body);
    const {name,email,password,pic}=req.body;
    try{
        await bcrypt.hash(password, 5, (err,result)=>{
           if(result){
               // console.log(result)
                
                const user=new userModel({name,email,password:result,pic});
                user.save();
                res.send("Registered Successfully")
           }else{
               console.log("Something went wrong while creating password hash")
           }
       });
       // console.log(hashpass)
   }catch(err){
       res.send("Something went wrong");
       console.log(err)
   }
})

UserRouter.post("/login",async (req,res)=>{
    const {email,password}=req.body;
    //  console.log(req.body);
    
    try{
        const user=await userModel.find({email});
        // console.log(hash)
        // console.log(user)
        if(user.length>0){
            let hash=user[0].password;
            var token = jwt.sign({ UserID: user[0]._id },process.env.key);
    
            // console.log(token)
            bcrypt.compare(password, hash, (err,result)=>{
                // console.log(result,hash)
                if(result){
                    res.send({user,"msg":"Login Successfully","token":token})
                }else{
                    res.send("Password is Wrong");
                }
            });
        }else{
            res.send("Email Or Password is invalid")
        }
    }catch(err){
        res.send("Something went wrong");
        console.log(err)
    }
})

UserRouter.patch("/edit/:id",async (req,res)=>{
    const payload=req.body;
    const ID=req.params.id;
    try{
        await userModel.findByIdAndUpdate({_id:ID},payload);
        res.send(`Updated User Successfully with id: ${ID}`);
    }catch(err){
        res.send("Something went wrong");
        console.log(err)
    }
})

UserRouter.get("/search", async (req, res) => {
    // console.log(req.query.q)
    try {
        let data=await userModel.find({
            "$or":[
                {name:{$regex:req.query.q}},
                {email:{$regex:req.query.q}}
            ]
          })
          res.send(data)
          
        
        
    } catch (error) {
        console.log(error)
    }
})

module.exports={UserRouter};