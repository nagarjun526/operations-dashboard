const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB...");
    console.log("MONGODB_URI =", process.env.MONGODB_URI?.replace(/:(.*?@)/, ":********@"));

await mongoose.connect(process.env.MONGODB_URI);

    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("Full Error:");
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;