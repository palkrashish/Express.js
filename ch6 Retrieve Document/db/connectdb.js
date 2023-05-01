import mongoose from "mongoose";

const connectdb = (DATABASE_URL) =>{
    return mongoose.connect(DATABASE_URL).then(()=>{
        console.log('Connect Successfully')
    }).catch((err)=>{
        console.log(err)
    })
}

export default connectdb;