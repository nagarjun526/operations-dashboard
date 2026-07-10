import { useEffect, useState } from "react";

function Header({ companyName }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header
      style={{
        background: "#2563eb",
        color: "white",
        padding: "15px 25px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <h2 style={{ margin: 0 }}>
          🏢 {companyName}
        </h2>

        <div style={{ fontSize: "14px" }}>
          👋 Welcome, Admin
        </div>
      </div>

      <div style={{ textAlign: "right" }}>
        <div>
          📅 {time.toLocaleDateString()}
        </div>

        <div
          style={{
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          🕒 {time.toLocaleTimeString()}
        </div>
      </div>
    </header>
  );
}

export default Header;