import mongoose from "mongoose";

const createDoc = async () => {
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

    const studentDoc = new studentModel({
      name: "Ranjit",
      age: 49,
      fees: 8500.40,
      hobbies: ["enjoy, Cricket, Singing"],
      isActive: true,
      comments: [{ value: "This is good mongoose" }],
    });

    // Saving Document

    const result = await studentDoc.save();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};


export default createDoc