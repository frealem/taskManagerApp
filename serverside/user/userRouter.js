import express from "express"
import { deleteUser, getUser, login, logout, register, updateUser } from "./userController.js";
import { protect } from "../authMiddleware.js";
const router=express.Router();

router.post('/register',register);
router.post('/login',login)
router.post('/logout',logout);
router.route('/profile').get(protect,getUser).put(protect,updateUser).delete(deleteUser);


export default router