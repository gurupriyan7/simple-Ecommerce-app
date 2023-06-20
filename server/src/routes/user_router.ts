import express from 'express';
import { userController } from '../modules/user/user.controller';


const router = express.Router()
const {createUser,userLogin}=userController

router.post("/add-user",createUser)
router.post("/login-user",userLogin)

export default router;