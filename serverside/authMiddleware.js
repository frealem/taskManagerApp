import jwt from 'jsonwebtoken';
import asyncHandler from "express-async-handler"
import userModel from './user/userModel.js';


const protect=asyncHandler(async(req,res,next)=>{
    let token;
   

    token=req.cookies.jwt;

    if(token){
try {
    const decoded= jwt.verify(token,process.env.SECRET_KEY)

    // console.log(decoded)
    req.user=await userModel.findById(decoded.userId).select('-password');

    next()
} catch (error) {
    res.status(401);
    throw new Error("invalid token here")
}console.log(req.user)
    }
    
    else{
        res.status(404);
        throw new Error('no token here!')
    }
})

export {protect}