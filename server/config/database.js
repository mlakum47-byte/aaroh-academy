import mongoose from 'mongoose';

let isDbConnected = false;

export const connectDatabase = async () => {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/aaroh_academy';

  try {
    mongoose.set('strictQuery', true);
    
    // Connection options with reasonable timeouts
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });

    isDbConnected = true;
    console.log(`[Database] MongoDB connected successfully to: ${uri.replace(/\/\/([^:]+):([^@]+)@/, '//$1:****@')}`);
  } catch (error) {
    isDbConnected = false;
    console.warn(`[Database] MongoDB connection failed: ${error.message}`);
    console.warn('[Database] Note: Ensure MongoDB is running locally (mongod) or provide a valid MONGODB_URI in .env (e.g., MongoDB Atlas).');
  }

  mongoose.connection.on('connected', () => {
    isDbConnected = true;
    console.log('[Database] MongoDB connection established.');
  });

  mongoose.connection.on('disconnected', () => {
    isDbConnected = false;
    console.warn('[Database] MongoDB disconnected.');
  });

  mongoose.connection.on('error', (err) => {
    isDbConnected = false;
    console.error(`[Database] MongoDB connection error: ${err.message}`);
  });
};

export const checkDbConnection = () => {
  return isDbConnected && mongoose.connection.readyState === 1;
};
