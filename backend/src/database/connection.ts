import mongoose from "mongoose";
import "dotenv/config";

const connectToDatabase = async () => {
  try {
    if (process.env.MONGO_URL) {
      mongoose.connect(process.env.MONGO_URL);
      console.log("Connected to database");
    }
  } catch (error) {
    console.log("Error connecting to database", error);
  }
};

export default connectToDatabase;
