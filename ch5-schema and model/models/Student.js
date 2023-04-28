import mongoose from "mongoose";

const createDoc = async (nm, ag, fe, hob, isact, comt) => {
  try {
    // DEFINING SCHEMA

    const studentSchema = new mongoose.Schema({
      name: { type: String, required: true, trim: true },
      age: { type: Number, required: true, min: 18, max: 50 },
      fees: {
        type: mongoose.Decimal128,
        required: true,
        validate: (v) => {
          v >= 5500.50;
        },
      },
      hobbies: { type: Array },
      isActive: { type: Boolean },
      comments: [
        { value: { type: String }, publish: { type: Date, default: Date.now } },
      ],
      join: { type: Date, default: Date.now },
    });
    // console.log(studentSchema.path('age')) // for know the path which are required

    // COMPILING SCHEMA

    const studentModel = mongoose.model("student", studentSchema);

    // CREATING A NEW DOCUMENT

    // const studentDoc = new studentModel({
    //   name: nm,
    //   age: ag,
    //   fees: fe,
    //   hobbies: hob,
    //   isActive: isact,
    //   comments: comt,
    // });

   
    const studentDoc = new studentModel({
        name: "Ajay",
        age: 49,
        fees: 8500.40,
        hobbies: ["enjoy, Cricket, Singing"],
        isActive: true,
        comments: [{ value: "This is good mongoose" }],
      });
      const studentDoc1 = new studentModel({
        name: "Sangita",
        age: 40,
        fees: 5500.40,
        hobbies: ["Basketball, game"],
        isActive: true,
        comments: [{ value: "Learning Js" }],
      });
    // Saving Document

    const result = await studentModel.insertMany([studentDoc, studentDoc1]);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};


export default createDoc