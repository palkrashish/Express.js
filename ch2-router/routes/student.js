import express from 'express'
const router = express.Router()
import { allStudent, insertStudent,updateStudent} from '../controller/studentController.js';


router.get('/all', allStudent)
router.post('/insert', insertStudent)
router.put('/update', updateStudent)

// router.get('/all', (req, res) =>{
//     res.send('all student')
// })


// router.post('/insert', (req, res) =>{
//     res.send('Creation of new student')
// })


// router.put('/update', (req, res) =>{
//     res.send('Update student')
// })


// router.delete('/delete', (req, res) =>{
//     res.send('Delete student')
// })

export default router;