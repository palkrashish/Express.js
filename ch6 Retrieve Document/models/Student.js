import mongoose from "mongoose";

// DEFINING SCHEMA

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  age: { type: Number, required: true, min: 18, max: 50 },
  fees: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => {
      v >= 5500.5;
    },
  },
  hobbies: { type: Array },
  isActive: { type: Boolean },
  comments: [
    { value: { type: String }, publish: { type: Date, default: Date.now } },
  ],
  join: { type: Date, default: Date.now },
});

// COMPILING SCHEMA
const studentModel = mongoose.model("student", studentSchema);

// RETRIEVE ALL DOCUMENT

const getAllDoc = async () =>{
    const result = await studentModel.find()
    // console.log(result)
    result.forEach((item)=>{
        console.log(item.name, item.age, item. hobbies)
    })
}

export { getAllDoc }
