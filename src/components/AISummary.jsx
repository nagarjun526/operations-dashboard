function AISummary({ orders }) {
  const totalOrders = (orders || []).length;

  const pendingOrders = (orders || []).filter(
    (order) => order.status === "Pending"
  ).length;

  const deliveredOrders = (orders || []).filter(
    (order) => order.status === "Delivered"
  ).length;

  const revenue = (orders || []).reduce(
    (sum, order) => sum + order.amount,
    0
  );

  return (
    <div
      style={{
        background: "#f8fafc",
        border: "2px solid #2563eb",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "25px",
        boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2
        style={{
          color: "#2563eb",
          marginBottom: "18px",
          fontWeight: "bold",
        }}
      >
        📋 Dashboard Summary
      </h2>

      <ul
        style={{
          marginLeft: "25px",
          lineHeight: "2",
          color: "#111827",
          fontSize: "16px",
          fontWeight: "600",
        }}
      >
        <li>Total Orders: {totalOrders}</li>

        <li>Delivered Orders: {deliveredOrders}</li>

        <li>Pending Orders: {pendingOrders}</li>

        <li>Total Revenue: ₹{revenue}</li>

          <li>Delivery performance is being monitored.</li>

<li>Business recommendations are generated based on current dashboard data.</li>
      </ul>
    </div>
  );
}

export default AISummary;