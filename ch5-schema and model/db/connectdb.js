import mongoose from "mongoose";

const connectdb = async (DATABASE_URL) => {
  try {
    const DB_OPTIONS = {
        dbName: 'schooldb',
        authSource: 'schooldb'
    }
        await mongoose
            .connect(DATABASE_URL,DB_OPTIONS);
        console.log("Connect DB Sucessfully");
    } catch (err) {
        console.log(err);
    }
};

export default connectdb;
