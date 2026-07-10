const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderId: Number,
  customer: String,
  product: String,
  amount: Number,
  status: String,
  orderDate: Date,
});

module.exports = mongoose.model("Order", orderSchema);