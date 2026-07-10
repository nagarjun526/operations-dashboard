import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function TopProductsChart({ orders }) {
  const productMap = {};

  orders.forEach((order) => {
    productMap[order.product] =
      (productMap[order.product] || 0) + 1;
  });

  const data = Object.keys(productMap).map((product) => ({
    product,
    sales: productMap[product],
  }));

  return (
    <div>
      <h3>🏆 Top Selling Products</h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="product" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sales" fill="#f59e0b" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TopProductsChart;