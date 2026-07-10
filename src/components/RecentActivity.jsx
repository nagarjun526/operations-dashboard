function RecentActivity({ orders }) {
  const timeline = (orders || []).map((order) => ({
    time: new Date(order.orderDate).toLocaleDateString(),
    event: `${order.customer} placed Order #${order.orderId}`,
    color:
      order.status === "Delivered"
        ? "#22c55e"
        : order.status === "Pending"
        ? "#f59e0b"
        : "#3b82f6",
  }));

  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "15px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "25px",
          color: "#2563eb",
        }}
      >
        📌 Activity Timeline
      </h2>

      {timeline.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              width: "15px",
              height: "15px",
              borderRadius: "50%",
              background: item.color,
              marginRight: "15px",
            }}
          ></div>

          <strong style={{ width: "120px",
            color: "#000",
             fontWeight: "700",
           }}>
            {item.time}
          </strong>

          <span 
            style={{
           color: "#6b7280",
           fontWeight: "500",
          }}
          >{item.event}</span>
        </div>
      ))}
    </div>
  );
}

export default RecentActivity;