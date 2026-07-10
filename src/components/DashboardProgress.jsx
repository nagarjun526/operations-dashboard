function DashboardProgress({ orders }) {
  const totalOrders = (orders || []).length;

  const deliveredOrders = (orders || []).filter(
    (order) => order.status === "Delivered"
  ).length;

  const revenue = (orders || []).reduce(
    (sum, order) => sum + order.amount,
    0
  );

  // Calculate percentages
  const orderCompletion =
    totalOrders > 0
      ? Math.round((deliveredOrders / totalOrders) * 100)
      : 0;

  const revenueTarget = Math.min(
    Math.round((revenue / 700000) * 100),
    100
  );

  const inventoryHealth = 90; // Static for now (Inventory MongoDB comes later)

  const employeeEfficiency = 96; // Static for now (Employees MongoDB comes later)

  const progress = [
    {
      title: "Inventory Health",
      value: inventoryHealth,
      color: "#22c55e",
    },
    {
      title: "Order Completion",
      value: orderCompletion,
      color: "#2563eb",
    },
    {
      title: "Revenue Target",
      value: revenueTarget,
      color: "#f59e0b",
    },
    {
      title: "Employee Efficiency",
      value: employeeEfficiency,
      color: "#8b5cf6",
    },
  ];

  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "15px",
        marginTop: "30px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "30px",
          color: "#111827",
          fontWeight: "bold",
          fontSize: "28px",
        }}
      >
        📊 Dashboard Progress
      </h2>

      {progress.map((item) => (
        <div key={item.title} style={{ marginBottom: "25px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontWeight: "bold",
              color: "#111827",
              fontSize: "18px",
            }}
          >
            <span>{item.title}</span>
            <span>{item.value}%</span>
          </div>

          <div
            style={{
              width: "100%",
              height: "15px",
              background: "#ddd",
              borderRadius: "20px",
              marginTop: "8px",
            }}
          >
            <div
              style={{
                width: `${item.value}%`,
                height: "100%",
                background: item.color,
                borderRadius: "20px",
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DashboardProgress;