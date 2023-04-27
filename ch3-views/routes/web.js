import express from 'express'
const router = express.Router()


import { allStudent } from '../controller/studentController.js';

router.get('/', allStudent)

export default router;