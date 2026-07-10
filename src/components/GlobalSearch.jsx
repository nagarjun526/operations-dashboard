import { useState } from "react";

function GlobalSearch({ orders, employees }) {
  const [search, setSearch] = useState("");

  const filteredOrders = orders.filter(
    (order) =>
      order.customer.toLowerCase().includes(search.toLowerCase()) ||
      order.product.toLowerCase().includes(search.toLowerCase())
  );

  const filteredEmployees = employees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.department.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "12px",
      }}
    >
      <h2>🔍 Global Search</h2>

      <input
        type="text"
        placeholder="Search Orders or Employees..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          margin: "20px 0",
          borderRadius: "8px",
        }}
      />

      <h3>Orders</h3>

          {filteredOrders.map((order, index) => (
  <div key={order.orderId || index}
          style={{
            padding: "10px",
            borderBottom: "1px solid #ddd",
          }}
        >
          <b>{order.customer}</b> - {order.product}
        </div>
      ))}

      <h3 style={{ marginTop: "30px" }}>Employees</h3>

      {filteredEmployees.map((emp, index) => (
  <div key={emp.id || index}
          style={{
            padding: "10px",
            borderBottom: "1px solid #ddd",
          }}
        >
          <b>{emp.name}</b> - {emp.department}
        </div>
      ))}
    </div>
  );
}

export default GlobalSearch;