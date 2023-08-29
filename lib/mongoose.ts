import mongoose from "mongoose";

let isConnected = false; // variable to check if mongoose is connected

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL)
    return console.log("loading => mongoDB url not found");
  if (!isConnected)
    return console.log("loading => already connected to MongoDB");

  try {
    await mongoose.connect(process.env.MONGODB_URL);
    isConnected = true;
    console.log("loading => connected to MongoDB");
  } catch (error) {
    console.log("loading => error", error);
  }
};
