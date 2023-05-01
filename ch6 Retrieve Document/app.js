import express from 'express'

import connectdb from './db/connectdb.js'
const app = express ()

const port = process.env.PORT||'3000'

const DATABASE_URL = 'mongodb://127.0.0.1:27017'

connectdb(DATABASE_URL)



app.get('/', (req, res)=>{
    res.send('Namaste Mongoose')
})

app.listen(port,()=>{
    console.log(`Server is running:-  http://localhost:${port}`)
})