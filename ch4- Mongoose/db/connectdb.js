import mongoose from "mongoose";


const connectdb = () =>{
    return mongoose.connect('mongodb://127.0.0.1:27017/schholdb')
    .then(()=>{
        console.log('Connect DB Sucessfully')
    })
    .catch((err)=>{
        console.log(err)
    })
}

export default connectdb;