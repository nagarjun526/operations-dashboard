const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db");
const orderRoutes = require("./routes/orderRoutes");
const inventoryRoutes = require("./routes/inventoryRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/orders", orderRoutes);
app.use("/inventory", inventoryRoutes);
app.use("/employees", employeeRoutes);
app.get("/", (req, res) => {
  res.send("Operations Dashboard API");
});

app.listen(5001, "0.0.0.0", () => {
  console.log("Server Running on port 5001");
});