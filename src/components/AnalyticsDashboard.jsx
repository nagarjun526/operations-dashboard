import RevenueTrendChart from "./RevenueTrendChart";
import TopProductsChart from "./TopProductsChart";
import InventoryStatusChart from "./InventoryStatusChart";
import OrdersTrendChart from "./OrdersTrendChart";

function AnalyticsDashboard({ orders, inventory }) {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        marginTop: "30px",
        borderRadius: "15px",
        boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "25px",
          color: "#111827",
          fontWeight: "700",
        }}
      >
        📊 Analytics Dashboard
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
        }}
      >
        <RevenueTrendChart orders={orders} />
        <OrdersTrendChart orders={orders} />
        <TopProductsChart orders={orders} />
        <InventoryStatusChart inventory={inventory} />
      </div>
    </div>
  );
}

export default AnalyticsDashboard;