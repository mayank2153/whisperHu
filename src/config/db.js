import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const ConnectDB = async () => {
    try {
        const connectionString = `${process.env.MONGODB_URI}/${DB_NAME}`;
        console.log("Attempting to connect with:", connectionString);
        
        const ConnectionInstance = await mongoose.connect(connectionString);
        console.log(`Connected to MongoDB at: ${ConnectionInstance.connection.host}`);
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
}

export default ConnectDB;