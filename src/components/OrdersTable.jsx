import { useState } from "react";
import axios from "axios";
import "../styles/OrdersTable.css";

function OrdersTable({ orders, setOrdersData}) {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
const [newOrder, setNewOrder] = useState({
  customer: "",
  product: "",
  orderDate: "",
  status: "Pending",
  amount: "",
});
console.log("Orders received:", orders);

const handleSaveOrder = async () => {
  try {
   const nextOrderId =
  orders.length > 0
    ? Math.max(...orders.map(order => Number(order.orderId))) + 1
    : 1001;

const orderToSave = {
  orderId: isEditing ? undefined : nextOrderId,
  customer: newOrder.customer,
  product: newOrder.product,
  orderDate: newOrder.orderDate,
  status: newOrder.status,
  amount: Number(newOrder.amount),
};

    if (isEditing) {
      const response = await axios.put(
        `https://operations-dashboard-backend-4w0z.onrender.com/orders/${editingId}`,
        orderToSave
      );

      setOrdersData(
        orders.map((order) =>
          order._id === editingId ? response.data : order
        )
      );

      setIsEditing(false);
      setEditingId(null);
    } else {
      const response = await axios.post(
        "https://operations-dashboard-backend-4w0z.onrender.com/orders",
        orderToSave
      );

      setOrdersData([...orders, response.data]);
    }

    setNewOrder({
      customer: "",
      product: "",
      orderDate: "",
      status: "Pending",
      amount: "",
    });

    setShowForm(false);
  } catch (err) {
    console.log(err);
    alert("Failed to save order");
  }
};
const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this order?"
  );

  if (!confirmDelete) return;

  try {
    await axios.delete(`https://operations-dashboard-backend-4w0z.onrender.com/orders/${id}`);

    setOrdersData(
      orders.filter((order) => order._id !== id)
    );
  } catch (err) {
    console.log(err);
    alert("Failed to delete order");
  }
};
  const filteredOrders = (orders || []).filter((order) => {
    const matchesSearch = order.customer
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || order.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="orders-container">
       <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
    }}
  >
      <h2>Recent Orders</h2>
      <button
  onClick={() => setShowForm(true)}
  style={{
    background: "#2563eb",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  }}
>
  + Add Order
</button>
    </div>
      {/* Search Box */}
      <input
        type="text"
        placeholder="Search Customer..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />

      {/* Filter Buttons */}
      <div className="filter-buttons">
        <button onClick={() => setStatusFilter("All")}>All</button>
        <button onClick={() => setStatusFilter("Delivered")}>Delivered</button>
        <button onClick={() => setStatusFilter("Pending")}>Pending</button>
        <button onClick={() => setStatusFilter("Shipped")}>Shipped</button>
      </div>

      <table>
  <thead>
    <tr>
      <th>Order ID</th>
      <th>Customer</th>
      <th>Product</th>
      <th>Date</th>
      <th>Status</th>
      <th>Actions</th>
    </tr>
  </thead>

  <tbody>
    {filteredOrders.map((order) => (
      <tr key={order._id}>
        <td>{order.orderId}</td>
        <td>{order.customer}</td>
        <td>{order.product}</td>
        <td>{new Date(order.orderDate).toLocaleDateString()}</td>
        <td>{order.status}</td>
        <td>
      <button
  onClick={() => {
    setNewOrder({
      customer: order.customer,
      product: order.product,
      orderDate: order.orderDate?.split("T")[0],
      status: order.status,
      amount: order.amount,
    });

    setEditingId(order._id);
    setIsEditing(true);
    setShowForm(true);
  }}
  style={{
    background: "#f59e0b",
    color: "white",
    border: "none",
    padding: "6px 12px",
    borderRadius: "6px",
    cursor: "pointer",
  }}
>
  Edit
</button>
<button
  onClick={() => handleDelete(order._id)}
  style={{
    background: "#ef4444",
    color: "white",
    border: "none",
    padding: "6px 12px",
    borderRadius: "6px",
    cursor: "pointer",
    marginLeft: "8px",
  }}
>
  Delete
</button>
</td>
      </tr>
    ))}
  </tbody>
</table>
    {/* Add Order Popup */}

{showForm && (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    }}
  >
    <div
      style={{
        background: "white",
        padding: "30px",
        borderRadius: "12px",
        width: "450px",
      }}
    >
      <h2>Add New Order</h2>


<input
  type="text"
  placeholder="Customer Name"
  value={newOrder.customer}
  onChange={(e) =>
    setNewOrder({
      ...newOrder,
      customer: e.target.value,
    })
  }
  style={{
    width: "100%",
    padding: "10px",
    marginTop: "15px",
    marginBottom: "15px",
  }}
/>
<input
  type="text"
  placeholder="Product"
  value={newOrder.product}
  onChange={(e) =>
    setNewOrder({
      ...newOrder,
      product: e.target.value,
    })
  }
  style={{
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
  }}
/>
<input
  type="date"
  value={newOrder.orderDate}
  onChange={(e) =>
    setNewOrder({
      ...newOrder,
      orderDate: e.target.value,
    })
  }
  style={{
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
  }}
/>
<select
  value={newOrder.status}
  onChange={(e) =>
    setNewOrder({
      ...newOrder,
      status: e.target.value,
    })
  }
  style={{
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
  }}
>
  <option value="Pending">Pending</option>
  <option value="Delivered">Delivered</option>
  <option value="Shipped">Shipped</option>
</select>
<input
  type="number"
  placeholder="Amount"
  value={newOrder.amount}
  onChange={(e) =>
    setNewOrder({
      ...newOrder,
      amount: e.target.value,
    })
  }
  style={{
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
  }}
/>
<br />
<br />

<button
  onClick={handleSaveOrder}
  style={{
    background: "#22c55e",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    marginRight: "10px",
  }}
>
  Save Order
</button>
      <button
        onClick={() => setShowForm(false)}
        style={{
          background: "red",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Close
      </button>
    </div>
  </div>
)}
    </div>
  );
}

export default OrdersTable;