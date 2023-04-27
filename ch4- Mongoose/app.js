import express from 'express'
const app = express()

const port = process.env.PORT|| '3000'
import connectdb from './db/connectdb.js'
// import mongoose from 'mongoose'


// mongoose.connect("mongodb://127.0.0.1:27017/schoodb").then(()=>{
//     console.log('connect mongoose successfully')
// })
connectdb()
app.get('/', (req, res)=>{
    res.send('hello')
})

app.listen(port, ()=>{
    console.log(`server is running http://localhost:${port}`)
})