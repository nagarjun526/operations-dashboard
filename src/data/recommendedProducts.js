import printer from "../assets/recommendations/printer.png";
import laptop from "../assets/recommendations/laptop.png";
import shipping from "../assets/recommendations/shipping.png";
import growth from "../assets/recommendations/growth.png";
const recommendedProducts = [
  {
    id: 1,
    icon: "🖨️",
    title: "Restock Printers",
    message: "Printer stock is low. Only 5 items left.",
    priority: "High",
    action: "Restock Now",
    color: "#ef4444",
  },
  {
    id: 2,
    icon: "💻",
    title: "Increase Laptop Stock",
    message: "Laptop sales increased by 25% this month.",
    priority: "Medium",
    action: "Order Inventory",
    color: "#3b82f6",
  },
  {
    id: 3,
    icon: "🚚",
    title: "Dispatch Pending Orders",
    message: "3 pending orders should be shipped today.",
    priority: "High",
    action: "Dispatch Orders",
    color: "#f59e0b",
  },
  {
    id: 4,
    icon: "📈",
    title: "Revenue Growth",
    message: "Revenue increased by 18% compared to last month.",
    priority: "Low",
    action: "View Report",
    color: "#22c55e",
  },
];

export default recommendedProducts;