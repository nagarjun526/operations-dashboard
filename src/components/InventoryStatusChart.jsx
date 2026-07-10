import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

function InventoryStatusChart({ inventory }) {
  const critical = inventory.filter((i) => i.stock <= 5).length;
  const low = inventory.filter(
    (i) => i.stock > 5 && i.stock <= 15
  ).length;
  const healthy = inventory.filter(
    (i) => i.stock > 15
  ).length;

  const data = [
    { name: "Critical", value: critical },
    { name: "Low", value: low },
    { name: "Healthy", value: healthy },
  ];

  const COLORS = ["#ef4444", "#f59e0b", "#22c55e"];

  return (
    <div>
      <h3>📦 Inventory Status</h3>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default InventoryStatusChart;