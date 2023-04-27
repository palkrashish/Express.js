import express from 'express'

const app = express()
import stu from './routes/student.js'


const port = process.env.PORT || '3000'

app.use('/stu', stu)

// app.get('/', ( req, res )=>{
// res.send('Hello Ji')
// })

app.listen(port, ()=>{
    console.log(`Server is running http://localhost:${port}`)
})