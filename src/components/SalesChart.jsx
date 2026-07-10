import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";



function SalesChart({orders}) {
  const months = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", 
];

const chartData = months.map((month, index) => {
  const totalSales = (orders || [])
    .filter((order) => {
      const date = new Date(order.orderDate);
      return date.getMonth() === index;
    })
    .reduce((sum, order) => sum + order.amount, 0);

  return {
    month,
    sales: totalSales,
  };
});
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        marginTop: "20px",
        borderRadius: "30px",
        width: "700px",
        height: "350px",
      }}
      
    >
      <h2
         style={{
      color: "#141415",
      fontSize: "30px",
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: "30px",
    }}
      >Monthly Sales</h2>

      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={chartData}
        margin={{
    top: 10,
    right: 20,
    left: 30,
    bottom: 5,
  }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" 
           tick={{
            fill: "#000",
            fontSize: 18,
            fontWeight: "bold",
           }}/>
          <YAxis  
            tick={{
             fill: "#000",
             fontSize: 18,
             fontWeight: "bold",
            }}
           />
          <Tooltip />
          <Bar dataKey="sales" fill="#2d6ee6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesChart;