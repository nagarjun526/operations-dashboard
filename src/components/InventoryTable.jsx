import { useState } from "react";
import axios from "axios";

function InventoryTable({ inventory, setInventoryData }) {

   const [showForm, setShowForm] = useState(false);
   const [isEditing, setIsEditing] = useState(false);
const [editingId, setEditingId] = useState(null);
const [newItem, setNewItem] = useState({
  product: "",
  stock: "",
  price: "",
  status: "In Stock",
});
const handleSaveInventory = async () => {
  try {
    const itemToSave = {
      product: newItem.product,
      stock: Number(newItem.stock),
      price: Number(newItem.price),
      status: newItem.status,
    };

    if (isEditing) {
      const response = await axios.put(
        `https://operations-dashboard-backend-4w0z.onrender.com/inventory/${editingId}`,
        itemToSave
      );

      setInventoryData(
        inventory.map((item) =>
          item._id === editingId ? response.data : item
        )
      );

      setIsEditing(false);
      setEditingId(null);
    } else {
      const response = await axios.post(
        "https://operations-dashboard-backend-4w0z.onrender.com/inventory",
        itemToSave
      );

      setInventoryData([...inventory, response.data]);
    }

    setNewItem({
      product: "",
      stock: "",
      price: "",
      status: "In Stock",
    });

    setShowForm(false);
  } catch (err) {
    console.log(err);
    alert("Failed to save inventory");
  }
};
const handleDeleteInventory = async (id) => {
  try {
    await axios.delete(`https://operations-dashboard-backend-4w0z.onrender.com/inventory/${id}`);

    setInventoryData(
      inventory.filter((item) => item._id !== id)
    );
  } catch (err) {
    console.log(err);
    alert("Failed to delete inventory");
  }
};
  return (
    <div style={{ marginTop: "30px" }}>
    <div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  }}
>
  <h2>Inventory</h2>

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
    + Add Inventory
  </button>
</div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {inventory.map((item,index) => (
            <tr key={item._id}>
               <td>{index + 1}</td>
              <td>{item.product}</td>
              <td>{item.stock}</td>
              <td>{item.price}</td>
              <td>{item.status}</td>
              <td>
  <button
    onClick={() => {
      setNewItem({
        product: item.product,
        stock: item.stock,
        price: item.price,
        status: item.status,
      });

      setEditingId(item._id);
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
    <button  onClick={() => handleDeleteInventory(item._id)}
    style={{
      background: "#ef4444",
      color: "white",
      border: "none",
      padding: "6px 12px",
      borderRadius: "6px",
      cursor: "pointer",
    }}
  >
    Delete
  </button>
</td>
            </tr>
          ))}
        </tbody>
      </table>
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
      <h2>Add Inventory</h2>

      <input
        type="text"
        placeholder="Product Name"
        value={newItem.product}
        onChange={(e) =>
          setNewItem({
            ...newItem,
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
        type="number"
        placeholder="Stock"
        value={newItem.stock}
        onChange={(e) =>
          setNewItem({
            ...newItem,
            stock: e.target.value,
          })
        }
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "15px",
        }}
      />

      <input
        type="number"
        placeholder="Price"
        value={newItem.price}
        onChange={(e) =>
          setNewItem({
            ...newItem,
            price: e.target.value,
          })
        }
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "15px",
        }}
      />

      <select
        value={newItem.status}
        onChange={(e) =>
          setNewItem({
            ...newItem,
            status: e.target.value,
          })
        }
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "15px",
        }}
      >
        <option>In Stock</option>
        <option>Low Stock</option>
        <option>Out of Stock</option>
      </select>

      <button
      onClick={handleSaveInventory}
        style={{
          background: "#22c55e",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "8px",
          marginRight: "10px",
          cursor: "pointer",
        }}
      >
        Save Inventory
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

export default InventoryTable;