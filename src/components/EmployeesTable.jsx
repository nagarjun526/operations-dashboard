import { useEffect, useState } from "react";
import axios from "axios";

function EmployeesTable() {
    const [employees, setEmployees] = useState([]);
    const [showForm, setShowForm] = useState(false);
const [isEditing, setIsEditing] = useState(false);
const [editingId, setEditingId] = useState(null);

const [newEmployee, setNewEmployee] = useState({
  name: "",
  department: "",
  role: "",
});
  useEffect(() => {
    axios
      .get("http://192.168.0.103:5001/employees")
      .then((res) => {
        setEmployees(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
const handleSaveEmployee = async () => {
  try {
    const employeeToSave = {
      name: newEmployee.name,
      department: newEmployee.department,
      role: newEmployee.role,
    };

    if (isEditing) {
      const response = await axios.put(
        `http://192.168.0.103:5001/employees/${editingId}`,
        employeeToSave
      );

      setEmployees(
        employees.map((employee) =>
          employee._id === editingId ? response.data : employee
        )
      );

      setIsEditing(false);
      setEditingId(null);
    } else {
      const response = await axios.post(
        "http://192.168.0.103:5001/employees",
        employeeToSave
      );

      setEmployees([...employees, response.data]);
    }

    setNewEmployee({
      name: "",
      department: "",
      role: "",
    });

    setShowForm(false);
  } catch (err) {
    console.log(err);
    alert("Failed to save employee");
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
  <h2>Employees</h2>

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
    + Add Employee
  </button>
</div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee, index) => (
            <tr key={employee._id}>
              <td>{index + 1}</td>
              <td>{employee.name}</td>
              <td>{employee.department}</td>
              <td>{employee.role}</td>
              <td>
  <button
    onClick={() => {
      setNewEmployee({
        name: employee.name,
        department: employee.department,
        role: employee.role,
      });

      setEditingId(employee._id);
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
      marginRight: "8px",
    }}
  >
    Edit
  </button>

  <button
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
      <h2>Add Employee</h2>

      <input
        type="text"
        placeholder="Employee Name"
        value={newEmployee.name}
        onChange={(e) =>
          setNewEmployee({
            ...newEmployee,
            name: e.target.value,
          })
        }
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "15px",
        }}
      />

      <input
        type="text"
        placeholder="Department"
        value={newEmployee.department}
        onChange={(e) =>
          setNewEmployee({
            ...newEmployee,
            department: e.target.value,
          })
        }
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "15px",
        }}
      />

      <input
        type="text"
        placeholder="Role"
        value={newEmployee.role}
        onChange={(e) =>
          setNewEmployee({
            ...newEmployee,
            role: e.target.value,
          })
        }
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "15px",
        }}
      />

      <button   onClick={handleSaveEmployee}
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
        Save Employee
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

export default EmployeesTable;