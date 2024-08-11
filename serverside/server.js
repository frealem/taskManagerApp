import express from 'express'
import dotenv from 'dotenv';
import cors from 'cors'
import mongoose from 'mongoose';
import userRoutes from './user/userRouter.js';
import taskRoutes from './task/taskRoute.js'
import { errorHandler, notFound } from './errorMiddleware.js';
import cookieParser from 'cookie-parser';



dotenv.config();
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(cors());

const port=5002||process.env.PORT
const mongoUrl=process.env.MONGOURL

// mongodatabase connection
mongoose.connect(mongoUrl).then(()=>console.log("successful database connection")).catch((error)=>{console.log(error,'error during connection')})

//call the routes

app.use('/api/users',userRoutes);
app.use('/api/tasks',taskRoutes)
app.get('/',(req,res)=>{res.send('server is ready!')})
app.use(errorHandler);
app.use(notFound);

app.listen(port,()=>console.log(`server listening on port ${port}...`));