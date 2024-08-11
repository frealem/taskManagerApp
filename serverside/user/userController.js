// logic for user management
import asyncHandler from 'express-async-handler'
import userModel from './userModel.js'
import generateToken from '../utils/generateToken.js'

const login=asyncHandler(async(req,res)=>{
    const{email,password}=req.body;

    const user=await userModel.findOne({email})
    if(user && (await user.matchPassword(password))){
        generateToken(res,user._id)
       res.status(201).json({
        _id:user._id,
        fullname:user.fullname,
        email:user.email
       })
    }
    else{
        res.status(400);
        throw new Error('Invalid email or password!')
    }
    
})
const register=asyncHandler(async(req,res)=>{
    const {fullname,email,password}=(req.body)

    const userExist=await userModel.findOne({email})

    if (userExist){
        res.status(400);
        throw new Error("user already exist!");
    }

    const newUser=await userModel.create({email,fullname,password}
    )

    if(newUser){
        generateToken(res,newUser._id)
       res.status(201).json({
        _id:newUser._id,
        fullname:newUser.fullname,
        email:newUser.email
       })
    }
    else{
        res.status(400);
        throw new Error('user data error!')
    }

})

const logout=asyncHandler(async(req,res)=>{
    res.cookie('jwt','',{
        httpOnly:true,
        expires:new Date(0)
    });

    res.status(201).json({message:"user logout!"})
})

const resetPassword=async(req,res)=>{
    res.status(200).json({message:"successful login"})
}

const updateUser=async(req,res)=>{
    res.status(200).json({message:"successful login"})
}

const deleteUser=async(req,res)=>{
    res.status(200).json({message:"successful login"})
}

const getUser=async(req,res)=>{
    
    res.status(200).json({message:"successful login"})
}

export {login,register,logout,resetPassword,updateUser,deleteUser,getUser};