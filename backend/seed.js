const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = require("./db");

const Order = require("./models/Order");
const Employee = require("./models/Employee");
const Inventory = require("./models/Inventory");

const seedDatabase = async () => {
  try {
    await connectDB();

    // Clear existing data
    await Order.deleteMany({});
    await Employee.deleteMany({});
    await Inventory.deleteMany({});

    // Orders
    await Order.insertMany([
      {
        orderId: 1001,
        customer: "Rahul",
        product: "Laptop",
        amount: 65000,
        status: "Delivered",
        orderDate: new Date(),
      },
      {
        orderId: 1002,
        customer: "Priya",
        product: "Mouse",
        amount: 1500,
        status: "Pending",
        orderDate: new Date(),
      },
      {
        orderId: 1003,
        customer: "Arjun",
        product: "Keyboard",
        amount: 2500,
        status: "Shipped",
        orderDate: new Date(),
      },
      {
        orderId: 1004,
        customer: "Sneha",
        product: "Monitor",
        amount: 12000,
        status: "Delivered",
        orderDate: new Date(),
      },
      {
        orderId: 1005,
        customer: "Kiran",
        product: "Printer",
        amount: 12000,
        status: "Pending",
        orderDate: new Date(),
      },
      {
        orderId: 1006,
        customer: "Anjali",
        product: "Headphones",
        amount: 3000,
        status: "Delivered",
        orderDate: new Date(),
      },
      {
        orderId: 1007,
        customer: "Vikram",
        product: "Webcam",
        amount: 2500,
        status: "Shipped",
        orderDate: new Date(),
      },
      {
        orderId: 1008,
        customer: "Pooja",
        product: "Tablet",
        amount: 28000,
        status: "Delivered",
        orderDate: new Date(),
      },
      {
        orderId: 1009,
        customer: "Ramesh",
        product: "SSD 1TB",
        amount: 7000,
        status: "Pending",
        orderDate: new Date(),
      },
      {
        orderId: 1010,
        customer: "Deepika",
        product: "Gaming Chair",
        amount: 18000,
        status: "Delivered",
        orderDate: new Date(),
      },
      {
        orderId: 1011,
        customer: "Amit",
        product: "Printer",
        amount: 9000,
        status: "Delivered",
        orderDate: new Date(),
      },
    ]);

    // Employees
    await Employee.insertMany([
      { id: 1, name: "Rahul", department: "Sales", role: "Manager" },
      { id: 2, name: "Priya", department: "HR", role: "Recruiter" },
      { id: 3, name: "Sneha", department: "IT", role: "Developer" },
      { id: 4, name: "Arjun", department: "Support", role: "Executive" },
    ]);

    // Inventory
    await Inventory.insertMany([
      {
        id: 1,
        product: "Dell Latitude 7440",
        stock: 20,
        price: "₹65,000",
        status: "Available",
      },
      {
        id: 2,
        product: "HP EliteBook 840 G10",
        stock: 15,
        price: "₹78,000",
        status: "Available",
      },
      {
        id: 3,
        product: "Logitech MX Master 3S",
        stock: 5,
        price: "₹12,000",
        status: "Low Stock",
      },
      {
        id: 4,
        product: "Samsung 27-inch Monitor",
        stock: 2,
        price: "₹22,000",
        status: "Reorder Required",
      },
    ]);

    console.log("✅ Database seeded successfully!");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDatabase();