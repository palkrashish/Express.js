import express from "express";

const app = express ()


const port = process.env.PORT || '3000'

app.get ('/student/all', ( req, res )=>{
    res.send('Hello We are seeing routing , All student Display')
})


app.post('/student/Insert', ( req, res)=>{
    res.send(' Insert a new Student')
})

app.patch('/student/update', ( req, res)=>{
    res.send(' Update a new Student')
})

app.delete('/student/delete', ( req, res)=>{
    res.send(' Delete a new Student')
})
// CONTACT PAGE ROUTING
// app.get('/contact', ( req, res )=>{
//     res.send('Contact Page')
// })

// PAGE NOT FOUND

app.get('*', ( req, res ) =>{
    res.send('Page Not Found')
})


app.listen(port, ()=>{
    console.log(` Server is listening  http://localhost:${port}`)
})




// .GET - RETRRIVE DATA {DATA KO DIKHANA}

// .POST - CREATE /INSERT DATA

// .PUT -  COMPLETELY UPDATE DATA

// .PATCH - PARITALLY UPDATE DATA

// .DELETE - DELETE DATA

// .ALL - ANY HTTP REQUEST METHOD in express  have this method {ALL}