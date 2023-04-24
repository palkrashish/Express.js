import express from 'express'
const router = express.Router()

router.get('/student/all', (req, res) =>{
    res.send('all student')
})


router.post('/student/create', (req, res) =>{
    res.send('Creation of new student')
})


router.put('/student/update', (req, res) =>{
    res.send('Update student')
})


router.delete('/student/delete', (req, res) =>{
    res.send('Delete student')
})

export default router;