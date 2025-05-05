import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "";

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI in your environment variables"
  );
}

export async function connectDB() {
  if (mongoose.connection.readyState >= 1) {
    console.log("alredy connected");
    return;
  }
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("database connected");
  } catch (e) {
    if (e instanceof Error) {
      console.log("connection failed", e.message);
    } else {
      console.log("connection failed", e);
    }
  }
}
