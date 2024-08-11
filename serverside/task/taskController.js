import asyncHandler from 'express-async-handler'
import taskModel from './taskModel.js'

const getAllTasks=asyncHandler(async(req,res)=>{
    const tasks=await taskModel.find();
    res.status(200).json(tasks)
})

const getTask=asyncHandler(async(req,res)=>{
    const task=await taskModel.findById(req.params.id);

    if(!task){
        return res.status(404).json({message:"the task is not found!"})
    }
    res.status(200).json(task)
})

const createTask=asyncHandler(async(req,res)=>{
    const{title,desc}=req.body;
    const task=await taskModel.create({title,desc})
   res.status(201).json(task);

})

const updateTask=asyncHandler(async(req,res)=>{
    const task=await taskModel.findById(req.params.id)

    if(!task){
       return res.status(404).json({message:'no data here!'}) 
    }

    task.title=req.body.title || task.title;
    task.desc=req.body.desc || task.desc;
    task.stage=req.body.stage || task.stage;
    task.priority=req.body.priority || task.priority;
    
    const updateTask=await task.save();
    res.status(201).json(updateTask);
})

const deleteTask=asyncHandler(async(req,res)=>{
    const task=await taskModel.deleteOne({_id:req.params.id})

    res.status(204).json({message:'task removed!'})
})

export {getAllTasks,getTask,createTask,updateTask,deleteTask};