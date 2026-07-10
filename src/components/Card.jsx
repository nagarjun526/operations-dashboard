import "../styles/Card.css";

function Card({ title, value, color }) {
  return (
    <div
      className="card"
      style={{
        background: color || "white",
      }}
    >
      <h3>{title}</h3>
      <h1>{value}</h1>
    </div>
  );
}

export default Card;