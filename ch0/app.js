import express from 'express'

const app = express ()

const port = process.env.PORT || '3000'

app.get('/', ( req, res ) =>{
    res.send('Namaste Express.js')
})

app.listen(port, ()=>{
    console.log(` Server listening at http://localhost:${port}`)
})