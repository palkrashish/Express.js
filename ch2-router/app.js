import express from "express";
import stu from './routes/student.js'
const app = express ()


const port = process.env.PORT || '3000'


// LOAD ROUTER MODULES
app.use('/stu', stu)


app.listen(port, ()=>{
    console.log(` Server is listening  http://localhost:${port}`)
})
