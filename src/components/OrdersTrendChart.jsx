import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function OrdersTrendChart({ orders }) {
  const orderMap = {};

  orders.forEach((order) => {
    const month = new Date(order.orderDate).toLocaleString("default", {
      month: "short",
    });

    orderMap[month] = (orderMap[month] || 0) + 1;
  });

  const data = Object.keys(orderMap).map((month) => ({
    month,
    orders: orderMap[month],
  }));

  return (
    <div>
      <h3>📦 Orders Trend</h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="orders" fill="#22c55e" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default OrdersTrendChart;