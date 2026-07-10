import { useState } from "react";

function CustomersTable() {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      phone: "9876543210",
      city: "Hyderabad",
      orders: 8,
    },
    {
      id: 2,
      name: "Priya Reddy",
      email: "priya@gmail.com",
      phone: "9876543211",
      city: "Bangalore",
      orders: 5,
    },
    {
      id: 3,
      name: "Amit Kumar",
      email: "amit@gmail.com",
      phone: "9876543212",
      city: "Chennai",
      orders: 11,
    },
    {
      id: 4,
      name: "Sneha Patel",
      email: "sneha@gmail.com",
      phone: "9876543213",
      city: "Mumbai",
      orders: 6,
    },
    {
      id: 5,
      name: "Kiran Rao",
      email: "kiran@gmail.com",
      phone: "9876543214",
      city: "Pune",
      orders: 4,
    },
  ]);

  const [search, setSearch] = useState("");

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(search.toLowerCase()) ||
      customer.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "15px",
        boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#111827",
          marginBottom: "20px",
        }}
      >
        👥 Customer Management
      </h2>

      <input
        type="text"
        placeholder="Search Customer..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr
            style={{
              background: "#2563eb",
              color: "white",
            }}
          >
            <th style={{ padding: "12px" }}>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>City</th>
            <th>Total Orders</th>
          </tr>
        </thead>

        <tbody>
          {filteredCustomers.map((customer) => (
            <tr
              key={customer.id}
              style={{
                textAlign: "center",
                borderBottom: "1px solid #ddd",
              }}
            >
              <td style={{ padding: "12px" }}>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
              <td>{customer.city}</td>
              <td>{customer.orders}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomersTable;