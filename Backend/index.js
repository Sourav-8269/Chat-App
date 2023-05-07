const express=require("express");
const { chats } = require("./Data/data");
const cors=require("cors");

const { connection } = require("./Configs/db");

const {authenticate}=require("./Middlewares/authenticate.middleware")

const { UserRouter } = require("./Routes/User.route");
const { ChatRouter } = require("./Routes/Chat.route");

const app=express();

app.use(express.json());

app.use(cors());

require('dotenv').config()

app.get("/",(req,res)=>{
    res.send("Welcome to My App");
})

app.use("/users",UserRouter);

app.use(authenticate)

app.use("/chats",ChatRouter);

app.listen(process.env.port,async ()=>{
    try{
        await connection;
        console.log("Connected to DB");
    }catch(err){
        console.log("Something went wrong");
    }
})