import mongoose from "mongoose";

export const connectToMongoDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://yakovmoshel:yakov_nitzan_m@cluster0.f53ui7h.mongodb.net/WatchListCrypto');
    console.log('✅ Connected to MongoDB');
  } catch (err) {
    console.error('❌ Failed to connect to MongoDB:', err);
    throw err;
  }
};
