import express from 'express'
import { allStudent, deleteStudent } from "../controller/studentController.js"
const router = express.Router()

router.get('/all', allStudent)
router.get('/delte', deleteStudent)


export default router;