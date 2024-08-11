import mongoose, { Schema } from 'mongoose'
const taskSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
    },
    date:{
        type:Date,
        default:new Date(),
    },
    priority:{
        type:String,
        default:"normal",
        enum:['high','medium','normal','low']
    },
    stage:{
        type:String,
        default:"todo",
        enum:['completed','inprogress','todo']
    },
   
},{timestamps:true})

const taskModel=mongoose.model('Task',taskSchema);
export default taskModel;