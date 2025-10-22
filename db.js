import mongoose from "mongoose";
import { config, configDotenv } from "dotenv";
configDotenv();
const connectionString = process.env.MONGODB;
export const connectDB = async () => {
  try {
    await mongoose.connect(connectionString);
    console.log("connection successful");
    console.error(error);
  } catch (error) {}
};
