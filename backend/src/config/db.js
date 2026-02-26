const mongoose = require("mongoose");

async function connectdb() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongoose is connected ");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}
module.exports = connectdb;
