import express from 'express';
import { getUserDetails } from '../controller/userData-controller.js';

const userDataRouter=express.Router();

userDataRouter.post('/details',getUserDetails);
// userDataRouter.post('/login',login);

// router.get('/',addUser);

export default userDataRouter;