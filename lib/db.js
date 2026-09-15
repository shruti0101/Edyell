import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // Already connected
    if (mongoose.connection.readyState === 1) {
      console.log("Already connected");
      return mongoose.connection;
    }

    // Connection is currently being established
    if (mongoose.connection.readyState === 2) {
      console.log("MongoDB connection already in progress");
      return mongoose.connection.asPromise();
    }

    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined");
    }

    const connection = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log("MongoDB Connected Successfully");

    return connection;
  } catch (error) {
    console.error("MongoDB Connection Error:", error);

    // VERY IMPORTANT
    // Let the API route know that connection failed
    throw error;
  }
};