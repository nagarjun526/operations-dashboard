import {
  FaHome,
  FaShoppingCart,
  FaBoxes,
  FaUsers,
  FaChartBar,
  FaCog,
  FaUserCircle,
  FaSearch,
} from "react-icons/fa";
import "../styles/Sidebar.css";
function Sidebar({ setPage,page  }) {
  return (
    <aside className="sidebar">
      <h2>Menu</h2>

<ul>

  <li onClick={() => setPage("Dashboard")}
      className={page === "Dashboard" ? "active" : ""}>
    <FaHome />
    <span>Dashboard</span>
  </li>
  <li onClick={() => setPage("Orders")}
    className={page === "Orders" ? "active" : ""}>
    <FaShoppingCart />
    <span>Orders</span>
  </li>
  <li onClick={() => setPage("Inventory")}
    className={page === "Inventory" ? "active" : ""}>
    <FaBoxes />
    <span>Inventory</span>
  </li>
  <li onClick={() => setPage("Employees")}
    className={page === "Employees" ? "active" : ""}>
    <FaUsers />
    <span>Employees</span>
  </li>
  <li onClick={() => setPage("Customers")}
      className={page === "Customers" ? "active" : ""}>
    👥
    <span>Customers</span>
  </li>
  <li onClick={() => setPage("Reports")}
     className={page === "Reports" ? "active" : ""}>
    <FaChartBar />
    <span>Reports</span>
  </li>
  <li onClick={() => setPage("Settings")}
    className={page === "Settings" ? "active" : ""}>
  <FaCog />
  <span>Settings</span>
</li>
<li onClick={() => setPage("Search")}
  className={page === "Search" ? "active" : ""}>
  <FaSearch />
  Search
</li>
<li onClick={() => setPage("Profile")}
  className={page === "Profile" ? "active" : ""}>
  <FaUserCircle />
  <span>Profile</span>
</li>
</ul>
    </aside>
  );
}

export default Sidebar;