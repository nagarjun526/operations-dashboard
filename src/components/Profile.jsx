import { useState, useEffect } from "react";
function Profile() {
    const [currentTime, setCurrentTime] = useState("");

useEffect(() => {
  const updateTime = () => {
    const now = new Date();

    setCurrentTime(
      now.toLocaleString("en-IN", {
        dateStyle: "medium",
        timeStyle: "medium",
      })
    );
  };

  updateTime();

  const timer = setInterval(updateTime, 1000);

  return () => clearInterval(timer);
}, []);
  return (
    <div
      style={{
        background: "white",
        padding: "30px",
        borderRadius: "15px",
        boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
        maxWidth: "700px",
        margin: "auto",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="Profile"
          style={{
            width: "140px",
            height: "140px",
            borderRadius: "50%",
            marginBottom: "20px",
          }}
        />

        <h2>Admin Profile</h2>
      </div>

      <hr style={{ margin: "20px 0" }} />

      <p><b>Name :</b> Nagarjun</p>

      <p><b>Email :</b> admin@gmail.com</p>

      <p><b>Role :</b> Operations Manager</p>

      <p><b>Department :</b> Operations</p>

      <p><b>Phone :</b> +91 9876543210</p>

      <p>
  <b>Last Login :</b> {currentTime}
</p>

      <p><b>Location :</b> Hyderabad</p>
    </div>
  );
}

export default Profile;