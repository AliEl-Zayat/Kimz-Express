const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: String, required: true },
  cat_prefix: { type: String, required: true },
  img: { type: String, required: true },
  max: { type: Number, required: true },
});

module.exports = mongoose.model("Product", productSchema);
