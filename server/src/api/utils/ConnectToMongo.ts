import mongoose from "mongoose";
const mongoUrl = process.env.MONGO_URI || '';

export const connectToMongoDB = async () => {
  try {
    await mongoose.connect(mongoUrl); 
    console.log('✅ Connected to MongoDB');
  } catch (err) {
    console.error('❌ Failed to connect to MongoDB:', err);
    throw err;
  }
};
