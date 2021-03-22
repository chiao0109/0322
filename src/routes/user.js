import {Router} from 'express';
import UserController from '../controllers/userController.js';

const router = Router();

router.get('/',UserController.getUser)

export default router;