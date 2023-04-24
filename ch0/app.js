import express from 'express' // ES 6
//  const express from 'express' // Old way

// Express Function
const app = express ()

// Port definition
const port = process.env.PORT || '3000'

// Root Creates
app.get('/', ( req, res ) =>{
    res.send('Namaste Express.js')
})

// Listening Server design

app.listen(port, ()=>{
    console.log(` Server listening at http://localhost:${port}`)
})