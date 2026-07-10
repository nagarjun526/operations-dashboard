const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
  product: String,
  stock: Number,
  price: Number,
  status: String,
});

module.exports = mongoose.model("Inventory", inventorySchema);