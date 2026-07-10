function RecommendationCard({
  icon,
  title,
  message,
  priority,
  color,
}) {
  return (
    <div
      style={{
        background: "#fff",
        borderLeft: `8px solid ${color}`,
        padding: "20px",
        borderRadius: "12px",
        marginBottom: "20px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <div style={{ fontSize: "40px" }}>
          {icon}
        </div>

        <div style={{ flex: 1 }}>
          <h3
            style={{
              margin: 0,
              color: "#111",
              fontWeight: "bold",
            }}
          >
            {title}
          </h3>

          <p
            style={{
              marginTop: "8px",
              color: "#555",
            }}
          >
            {message}
          </p>

          <span
            style={{
              display: "inline-block",
              marginTop: "10px",
              padding: "6px 12px",
              background: color,
              color: "white",
              borderRadius: "20px",
              fontWeight: "bold",
            }}
          >
            {priority} Priority
          </span>
        </div>
      </div>
    </div>
  );
}

export default RecommendationCard;