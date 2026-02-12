const config = require('./config');

const connectDB = async () => {
  try {
    // This is a placeholder for MongoDB connection
    // In production, use mongoose or your preferred ODM
    console.log('Database connection configured');
    console.log(`Database: ${config.DATABASE_URL}`);
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
