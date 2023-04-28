import express from "express";

const app = express()
const port = process.env.PORT || '3000'
import connectdb from "./db/connectdb.js";

const DABASE_URL = 'mongodb://127.0.0.1/27017'
import './models/Student.js'
connectdb(DABASE_URL)

app.get('/', (req, res)=>{
    res.send('hello dear')
})

app.listen(port, ()=>{
    console.log(` Server is running http://localhost:${port}`)
})