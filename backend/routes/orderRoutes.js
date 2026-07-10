const express = require("express");
const router = express.Router();

console.log("✅ orderRoutes loaded");

const {
  getOrders,
  addOrder,
  deleteOrder,
  updateOrder,
} = require("../controllers/orderController");

router.get("/", getOrders);
router.post("/", addOrder);
router.put("/:id", updateOrder);
router.delete("/:id", (req, res, next) => {
  console.log("DELETE route hit:", req.params.id);
  next();
}, deleteOrder);

module.exports = router;