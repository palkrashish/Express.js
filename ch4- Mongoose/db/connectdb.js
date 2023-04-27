import mongoose from "mongoose";

const connectdb = async (DATABASE_URL) => {
  try {
        await mongoose
            .connect(DATABASE_URL);
        console.log("Connect DB Sucessfully");
    } catch (err) {
        console.log(err);
    }
};

export default connectdb;
