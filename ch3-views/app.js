import express from 'express'

const app = express()
import web from './routes/web.js'


const port = process.env.PORT || '3000'

app.use('/', web)

// app.get('/', ( req, res )=>{
// res.send('Hello Ji')
// })

app.listen(port, ()=>{
    console.log(`Server is running http://localhost:${port}`)
})