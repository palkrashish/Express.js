import express from "express";

const app = express()
const port = process.env.PORT || '3000'
import connectdb from "./db/connectdb.js";

const DABASE_URL = 'mongodb://127.0.0.1/27017'
import createDoc from  "./models/Student.js";
connectdb(DABASE_URL)

//Create and Save Document

createDoc()

// createDoc('Ajay', 34, 7800.20, ['Dancing', 'Cricket'], false, [{value: 'leearning mongoose'}])

app.get('/', (req, res)=>{
    res.send('hello dear')
})

app.listen(port, ()=>{
    console.log(` Server is running http://localhost:${port}`)
})