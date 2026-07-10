import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function RevenueTrendChart({ orders }) {
  const revenueMap = {};

  orders.forEach((order) => {
    const month = new Date(order.orderDate).toLocaleString("default", {
      month: "short",
    });

    revenueMap[month] = (revenueMap[month] || 0) + order.amount;
  });

  const data = Object.keys(revenueMap).map((month) => ({
    month,
    revenue: revenueMap[month],
  }));

  return (
    <div>
      <h3>📈 Revenue Trend</h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#3b82f6"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RevenueTrendChart;