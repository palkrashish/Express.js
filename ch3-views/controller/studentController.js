import { join } from "path"

const allStudent = (req, res)=>{
    // res.send('Hello all student')

    res.sendfile(join(process.cwd(), 'views', 'index.html'))
}




export { allStudent}