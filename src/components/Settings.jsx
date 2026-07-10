import { useState } from "react";
import { toast } from "react-toastify";
function Settings({
  companyName,
  setCompanyName,
    currency,
  setCurrency,
}) {
 
  const [theme, setTheme] = useState("Light");
  const [notifications, setNotifications] = useState(true);

  const saveSettings = () => {
  alert("✅ Settings Saved Successfully!");
};

  return (
    <div
      style={{
        background: "white",
        padding: "25px",
        borderRadius: "15px",
        boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "30px",
          color: "#111827",
        }}
      >
        ⚙️ Dashboard Settings
      </h2>

      {/* Company Name */}

      <div style={{ marginBottom: "20px" }}>
        <label><b>Company Name</b></label>

        <input
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "8px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      {/* Currency */}

      <div style={{ marginBottom: "20px" }}>
        <label><b>Currency</b></label>

        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "8px",
            borderRadius: "8px",
          }}
        >
          <option>₹</option>
          <option>$</option>
          <option>€</option>
        </select>
      </div>

      {/* Theme */}

      <div style={{ marginBottom: "20px" }}>
        <label><b>Theme</b></label>

        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "8px",
            borderRadius: "8px",
          }}
        >
          <option>Light</option>
          <option>Dark</option>
        </select>
      </div>

      {/* Notifications */}

      <div style={{ marginBottom: "30px" }}>
        <label>
          <input
            type="checkbox"
            checked={notifications}
            onChange={() =>
              setNotifications(!notifications)
            }
          />

          Enable Notifications
        </label>
      </div>

      <button
        onClick={saveSettings}
        style={{
          background: "#2563eb",
          color: "white",
          border: "none",
          padding: "12px 25px",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Save Settings
      </button>
    </div>
  );
}

export default Settings;