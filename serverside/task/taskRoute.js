import express from "express"
import { protect } from "../authMiddleware.js";
import { createTask, deleteTask, getAllTasks, getTask, updateTask } from "./taskController.js";
const router=express.Router();

router.route('/').get(protect,getAllTasks);
router.route('/').post(protect,createTask)
router.route('/:id').get(protect,getTask).put(protect,updateTask).delete(protect,deleteTask);


export default router