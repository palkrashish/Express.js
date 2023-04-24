import express from "express";

const app = express ()


const port = process.env.PORT || '3000'

app.get ('/student/all', ( req, res )=>{
    res.send('Hello We are seeing routing , All student Display')
})


app.post('/student/Insert', ( req, res)=>{
    res.send(' Insert a new Student')
})

app.listen(port, ()=>{
    console.log(` Server is listening  http://localhost:${port}`)
})