import { useState,useEffect} from "react";
import axios from "axios";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Card from "./components/Card";
import OrdersTable from "./components/OrdersTable";
import SalesChart from "./components/SalesChart";
import OrderStatusChart from "./components/OrderStatusChart";
import RecentActivity from "./components/RecentActivity";
import Notifications from "./components/Notifications";
import Footer from "./components/Footer";
import InventoryTable from "./components/InventoryTable";
import EmployeesTable from "./components/EmployeesTable";
import RecommendationSection from "./components/RecommendationSection";
import DashboardProgress from "./components/DashboardProgress";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";
import BusinessInsights from "./components/BusinessInsights";
import AnalyticsDashboard from "./components/AnalyticsDashboard";
import CustomersTable from "./components/CustomersTable";
import Settings from "./components/Settings";
import Profile from "./components/Profile";
import GlobalSearch from "./components/GlobalSearch";

import Loading from "./components/Loading";
function App() {
    const [page, setPage] = useState("Dashboard");
    const [companyName, setCompanyName] = useState("Operations Dashboard");
    const [currency, setCurrency] = useState("₹");
    const [ordersData, setOrdersData] = useState([]);
    const [inventoryData, setInventoryData] = useState([]);
    const [employeesData, setEmployeesData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
    axios.get("http://192.168.0.103:5001/orders")
   .then((response) => {
  console.log("API Response:", response.data);
  setOrdersData(response.data);
  setLoading(false);
})
   .catch((error) => {
  console.error("Error fetching orders:", error);
  setLoading(false);
});
}, []);
useEffect(() => {
   axios.get("http://192.168.0.103:5001/inventory")
    .then((response) => {
      setInventoryData(response.data);
    })
    .catch((error) => {
      console.error("Error fetching inventory:", error);
    });
}, []);
useEffect(() => {
 axios.get("http://192.168.0.103:5001/employees")
    .then((response) => {
      setEmployeesData(response.data);
    })
    .catch((error) => {
      console.error("Error fetching employees:", error);
    });
}, []);

console.log("ordersData State:", ordersData);
    const totalOrders = ordersData.length;

  const deliveredOrders = ordersData.filter(
    (order) => order.status === "Delivered"
  ).length;

  const pendingOrders = ordersData.filter(
    (order) => order.status === "Pending"
  ).length;

  const totalRevenue = ordersData.reduce(
    (sum, order) => sum + order.amount,
    0
  );
  console.log("ordersData:", ordersData);
const exportPDF = () => {
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("Operations Dashboard Report", 14, 20);

  autoTable(doc, {
    head: [["Metric", "Value"]],
    body: [
      ["Total Orders", totalOrders],
      ["Delivered Orders", deliveredOrders],
      ["Pending Orders", pendingOrders],
      ["Revenue", currency + totalRevenue.toLocaleString("en-IN")],
    ],
    startY: 30,
  });

  doc.save("Operations_Report.pdf");
};
const exportExcel = () => {
  const data = ordersData.map((order) => ({
    "Order ID": order.orderId,
    Customer: order.customer,
    Product: order.product,
    Date: new Date(order.orderDate).toLocaleDateString(),
    Status: order.status,
    Amount: `${currency}${order.amount}`,
  }));

  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, worksheet, "Orders");

  XLSX.writeFile(workbook, "Orders_Report.xlsx");
};
const printReport = () => {
  window.print();
};
if (loading) {
  return <Loading />;
}
   return (
 <>
    <Header companyName={companyName}/>
    <div style={{ display: "flex", width: "100%" }}>
        <Sidebar setPage={setPage} 
          page={page}
        />
       <div 
       style={{  
        padding: "20px",
    flex: 1,
    }}
    >
  {page === "Dashboard" && (
  <>
    <h2>Welcome to Dashboard</h2>

 <div style={{ display: "flex", flexWrap: "wrap" }}>
   <Card
  title="Total Orders"
  value={totalOrders}
  color="#3b82f6"
/>

<Card
  title="Delivered Orders"
  value={deliveredOrders}
  color="#22c55e"
/>

<Card
  title="Pending Orders"
  value={pendingOrders}
  color="#f59e0b"
/>
<Card
  title="Revenue"
  value={`${currency}${totalRevenue}`}
  color="#8b5cf6"
/>

</div>
  <OrdersTable orders={ordersData} 
   setOrdersData={setOrdersData}
  />
  <div style={{ display: "flex", gap: "20px", marginTop: "30px" }}>
  <SalesChart orders={ordersData} />
  <OrderStatusChart orders={ordersData}/>
  </div>
  <div
  style={{
    display: "flex",
    gap: "20px",
    marginTop: "30px",
  }}
>
  <div style={{ flex: 2 }}>
    <RecentActivity orders={ordersData} />
  </div>

  <div style={{ flex: 1 }}>
    <Notifications orders={ordersData} />
  </div>
</div>


<DashboardProgress
  orders={ordersData}
  inventory={inventoryData}
  employees={employeesData}
/>
<BusinessInsights
  orders={ordersData}
  inventory={inventoryData}
/>
<RecommendationSection
  orders={ordersData}
   inventory={inventoryData}
  employees={employeesData}
/>
<AnalyticsDashboard
  orders={ordersData}
  inventory={inventoryData}
/>
<Footer />
    </>
)}
{page === "Orders" && (
  <>
    <h2>Orders Page</h2>

    <OrdersTable orders={ordersData}
    setOrdersData={setOrdersData}
    />
  </>
)}
{page === "Inventory" && (
  <>
    <h2>Inventory Page</h2>

    <InventoryTable 
    inventory={inventoryData}
  setInventoryData={setInventoryData}
    />
  </>
)}
{page === "Employees" && (
  <>
    <h2>Employees Page</h2>

    <EmployeesTable 
      employees={employeesData}
  setEmployeesData={setEmployeesData}
    />
  </>
)}
{page === "Customers" && (
  <>
    <h2>Customers Page</h2>

    <CustomersTable />
  </>
)}
{page === "Profile" && (
  <>
    <h2>Admin Profile</h2>

    <Profile />
  </>
)}
{page === "Search" && (
  <>
    <h2>Global Search</h2>

    <GlobalSearch
      orders={ordersData}
      employees={employeesData}
    />
  </>
)}
{page === "Settings" && (
  <>
    <h2>Settings</h2>

    <Settings  companyName={companyName}
  setCompanyName={setCompanyName}
   currency={currency}
  setCurrency={setCurrency}
  />
  </>
)}
{page === "Reports" && (
  <>
    <h2>Reports Dashboard</h2>

    <div
  style={{
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "20px",
  }}
>
  <button
    onClick={exportPDF}
    style={{
      background: "#22c55e",
      color: "white",
      border: "none",
      padding: "10px 20px",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "bold",
    }}
  >
    📄 Export PDF
  </button>
  <button
  onClick={exportExcel}
  style={{
    background: "#2563eb",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    marginLeft: "10px",
  }}
>
  📊 Export Excel
</button>
<button
  onClick={printReport}
  style={{
    background: "#f59e0b",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    marginLeft: "10px",
  }}
>
  🖨 Print Report
</button>
</div>
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <Card
        title="Total Orders"
        value={totalOrders}
        color="#3b82f6"
      />

      <Card
        title="Delivered Orders"
        value={deliveredOrders}
        color="#22c55e"
      />

      <Card
        title="Pending Orders"
        value={pendingOrders}
        color="#f59e0b"
      />

     <Card
  title="Revenue"
  value={`${currency}${totalRevenue}`}
  color="#8b5cf6"
/>
    </div>

    <div
      style={{
        display: "flex",
        gap: "20px",
        marginTop: "30px",
      }}
    >
      <SalesChart orders={ordersData}/>
      <OrderStatusChart orders={ordersData}/>
    </div>
  </>
)}
</div>
 </div>

 </>
  );
}

export default App;