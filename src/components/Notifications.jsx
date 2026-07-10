function Notifications({ orders }) {
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
        background: "white",
        padding: "20px",
        borderRadius: "20px",
        marginTop: "30px",
      }}
    >
      <h2
        style={{
          color: "#2563eb",
          textAlign: "center",
        }}
      >
        Notifications
      </h2>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          marginTop: "20px",
        }}
      >
        <li
          style={{
            fontWeight: "bold",
            fontSize: "18px",
            color: "black",
            marginBottom: "15px",
          }}
        >
          📦 {totalOrders} Orders Received
        </li>

        <li
          style={{
            fontWeight: "bold",
            fontSize: "18px",
            color: "black",
            marginBottom: "15px",
          }}
        >
          ⏳ {pendingOrders} Pending Orders
        </li>

        <li
          style={{
            fontWeight: "bold",
            fontSize: "18px",
            color: "black",
            marginBottom: "15px",
          }}
        >
          ✅ {deliveredOrders} Orders Delivered
        </li>

        <li
          style={{
            fontWeight: "bold",
            fontSize: "18px",
            color: "black",
          }}
        >
          💰 Revenue ₹{revenue}
        </li>
      </ul>
    </div>
  );
}

export default Notifications;