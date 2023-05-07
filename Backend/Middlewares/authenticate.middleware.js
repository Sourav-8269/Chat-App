const jwt=require("jsonwebtoken");

const authenticate=(req,res,next)=>{
    const token=req.headers.authorization;
    // console.log(token);
    if(token){
        const decoded=jwt.verify(token,process.env.key);
        if(decoded){
            // console.log(decoded)
            const userID=decoded.UserID;
            req.body.userID=userID
            next();
        }else{
            res.send("Please Login First")
        }
    }else{
        res.send("Please Login First")
    }
}

module.exports={authenticate};