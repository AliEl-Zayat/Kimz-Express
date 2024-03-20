const mongoose = require("mongoose");

const url =
  "mongodb+srv://alielzayat07:vWfapInCBzUfy4ai@mag.hgnzpga.mongodb.net/?retryWrites=true&w=majority&appName=Mag";

const connectDB = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

connectDB();
