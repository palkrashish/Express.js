const allStudent = (req, res) =>{
    res.send('Show all Student List')
}

const insertStudent = ( req, res )=>{
    res.send('Insert a student')
}

const updateStudent = ( req, res )=>{
    res.send('Update student')
}

export {allStudent, insertStudent,updateStudent}