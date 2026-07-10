import RecommendationCard from "./RecommendationCard";
import AISummary from "./AISummary";

function RecommendationSection({ orders, inventory = [], employees = [] }) {
  const pendingOrders = orders.filter(
    (order) => order.status === "Pending"
  ).length;

  const deliveredOrders = orders.filter(
    (order) => order.status === "Delivered"
  ).length;

  const totalRevenue = orders.reduce(
    (sum, order) => sum + order.amount,
    0
  );

  const deliveryRate =
    orders.length > 0
      ? Math.round((deliveredOrders / orders.length) * 100)
      : 0;

  const criticalStock = inventory.filter(
    (item) => item.stock <= 5
  );

  const lowStock = inventory.filter(
    (item) => item.stock > 5 && item.stock <= 15
  );

  const recommendations = [];

  if (pendingOrders > 0) {
    recommendations.push({
      id: 1,
      icon: "🚚",
      title: "Dispatch Pending Orders",
      message: `${pendingOrders} pending orders should be shipped today.`,
      priority: "High",
      action: "Dispatch Orders",
      color: "#f59e0b",
    });
  }

  if (criticalStock.length > 0) {
    recommendations.push({
      id: 2,
      icon: "📦",
      title: "Critical Inventory Alert",
      message: `${criticalStock.length} products require immediate restocking.`,
      priority: "High",
      action: "Restock Now",
      color: "#ef4444",
    });
  }

  if (lowStock.length > 0) {
    recommendations.push({
      id: 3,
      icon: "📋",
      title: "Low Stock Warning",
      message: `${lowStock.length} products should be reordered soon.`,
      priority: "Medium",
      action: "Review Inventory",
      color: "#f59e0b",
    });
  }

  if (deliveryRate >= 80) {
    recommendations.push({
      id: 4,
      icon: "✅",
      title: "Delivery Performance",
      message: `Delivery success rate is ${deliveryRate}%.`,
      priority: "Low",
      action: "View Performance",
      color: "#22c55e",
    });
  }

  if (totalRevenue > 500000) {
    recommendations.push({
      id: 5,
      icon: "📈",
      title: "Revenue Growth",
      message: `Revenue reached ₹${totalRevenue.toLocaleString()}.`,
      priority: "Low",
      action: "View Report",
      color: "#3b82f6",
    });
  }

  if (employees.length > 0) {
    recommendations.push({
      id: 6,
      icon: "👨‍💼",
      title: "Workforce Status",
      message: `${employees.length} employees are available for operations.`,
      priority: "Low",
      action: "Employee Details",
      color: "#8b5cf6",
    });
  }

  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        marginTop: "30px",
        borderRadius: "15px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "25px",
          color: "#111",
          fontWeight: "700",
        }}
      >
        🤖 AI Business Recommendations
      </h2>

      <AISummary orders={orders} />

      {recommendations.map((item) => (
        <RecommendationCard key={item.id} {...item} />
      ))}
    </div>
  );
}

export default RecommendationSection;