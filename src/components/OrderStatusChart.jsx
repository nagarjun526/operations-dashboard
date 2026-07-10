import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#22c55e", "#f59e0b", "#3b82f6"];

function OrderStatusChart({ orders }) {
  const delivered = (orders || []).filter(
    (order) => order.status === "Delivered"
  ).length;

  const pending = (orders || []).filter(
    (order) => order.status === "Pending"
  ).length;

  const shipped = (orders || []).filter(
    (order) => order.status === "Shipped"
  ).length;

  const data = [
    { name: "Delivered", value: delivered },
    { name: "Pending", value: pending },
    { name: "Shipped", value: shipped },
  ];

  return (
    <div
      style={{
        background: "white",
        marginTop: "30px",
        padding: "20px",
        borderRadius: "20px",
        width: "700px",
      }}
    >
      <h2
        style={{
          color: "#080809",
          fontSize: "28px",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Order Status
      </h2>

      <PieChart width={500} height={300}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          label
        >
          {data.map((entry, index) => (
            <Cell
              key={index}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>

        <Tooltip />

        <Legend
          wrapperStyle={{
            fontSize: "16px",
            fontWeight: "bold",
            color: "#000",
          }}
        />
      </PieChart>
    </div>
  );
}

export default OrderStatusChart;