function BusinessInsights({ inventory, orders }) {

  const criticalProducts = inventory.filter(
    (item) => item.stock <= 5
  );

  const lowStockProducts = inventory.filter(
    (item) => item.stock > 5 && item.stock <= 15
  );

  return (
    <div
      style={{
        background: "white",
        padding: "25px",
        marginTop: "30px",
        borderRadius: "15px",
        boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2
  style={{
    textAlign: "center",
    color: "#111827",
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "30px",
  }}
>
  📈 Business Insights
</h2>

      {/* Smart Restock Prediction */}

      <div
        style={{
          border: "2px solid #3b82f6",
          borderRadius: "12px",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
    <h3
        style={{
            color: "#1d4ed8",
            fontSize: "26px",
            fontWeight: "700",
            marginBottom: "20px",
            }}
            >
            📦 Smart Restock Prediction
    </h3>

        <p 
          style={{
             color: "#111827",
             fontSize: "18px",
             fontWeight: "600",
        }}
        >
          🔴 Critical Products :
          <b> {criticalProducts.length}</b>
        </p>

        <p
          style={{
              color: "#111827",
              fontSize: "18px",
              fontWeight: "600",
          }}
        >
          🟠 Restock Soon :
          <b> {lowStockProducts.length}</b>
        </p>

        <hr />

        {criticalProducts.length === 0 &&
          lowStockProducts.length === 0 && (
            <p style={{ color: "green",
                
             }}>
              ✅ All inventory levels are healthy.
            </p>
          )}

        {criticalProducts.map((item) => (
          <div
            key={item._id}
            style={{
              background: "#fee2e2",
              padding: "12px",
              marginTop: "12px",
              borderRadius: "10px",
               color: "#111827",
                    fontSize: "18px",
                fontWeight: "500",
            }}
          >
           <div
             style={{
             fontSize: "20px",
             fontWeight: "700",
             color: "#111827",
             marginBottom: "8px",
             }}
            >
             🔴 {item.product}
           </div>

            <br />
             <p style={{ margin: "6px 0" }}>
            Current Stock : {item.stock}
            </p>
            <br />

            <p style={{ margin: "6px 0" }}>
            Suggested Reorder :
            <b> {20 - item.stock} Units</b>
            </p>
          </div>
        ))}

        {lowStockProducts.map((item) => (
          <div
            key={item._id}
            style={{
              background: "#fef3c7",
              padding: "12px",
              marginTop: "12px",
              borderRadius: "10px",
               color: "#111827",
                 fontSize: "18px",
                fontWeight: "500",
            }}
          >
            <div
                style={{
                fontSize: "20px",
                fontWeight: "700",
                color: "#111827",
                marginBottom: "8px",
                }}
>
  🟠 {item.product}
</div>

            <br />

            Current Stock : {item.stock}

            <br />

            Suggested Reorder :
            <b> {20 - item.stock} Units</b>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BusinessInsights;