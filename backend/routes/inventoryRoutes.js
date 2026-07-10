console.log("✅ inventoryRoutes file loaded");
const express = require("express");
const router = express.Router();
console.log("✅ inventoryRoutes loaded");
const {
  getInventory,
  addInventory,
    updateInventory,
  deleteInventory,
} = require("../controllers/inventoryController");

router.get("/", getInventory);
router.post("/", addInventory);
router.put("/:id", updateInventory);
router.delete("/:id", deleteInventory);
module.exports = router;