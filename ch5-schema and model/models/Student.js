import mongoose from 'mongoose'


// DEFINING SCHEMA

const studentSchema = new mongoose.Schema ({
    name: {type: String, required: true, trim :true},
    age: {type: Number, required: true, min: 18, max: 50},
    fess: {type: mongoose.Decimal128, required: true, validate:((v)=>{ v>= 5500.50})},
    hobbies: {type: Array},
    isActive: {type: Boolean},
    comments: [{value: {type: String}, publish: {type: Date, default: Date.now}}],
    join: {type : Date, default: Date.now}
})
// console.log(studentSchema.path('age')) // for know the path which are required 

// COMPILING SCHEMA

const studentModel = mongoose.model('student', studentSchema)