import React, { useState } from "react";

const Signup = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState({ name: "", email: "", password: "" });

  const handleSignUp = () => {
    if (!user.name || !user.email || !user.password) {
      setError({
        ...error,
        name: "Name is required!",
        email: "Email is required",
        password: "Password is required",
      });
    } else {
      localStorage.setItem("user", JSON.stringify(user));
      setUser({ name: "", email: "", password: "" });
      setError({ name: "", email: "", password: "" });
    }
  };

  return (
    <div style={{ marginTop: 20 }}>
      <div
        style={{
          background: "gray",
          borderRadius: "5px",
          width: "200px",
          margin: "0 auto",
          padding: 20,
        }}
      >
        <h1 style={{ color: "#fff", margin: 0 }}>Sign Up</h1>
        <div>
          <div style={{ color: "#fff" }}>Name</div>
          <input
            style={{ padding: "5px 10px", marginTop: "5px", outline: "none" }}
            type="text"
            onChange={(e) => {
              setUser({ ...user, name: e.target.value });
            }}
            value={user.name}
          />
          {!user.name && error.name && (
            <span style={{ color: "#822121" }}>{error.name}</span>
          )}
        </div>
        <div>
          <div style={{ color: "#fff" }}>Email</div>
          <input
            style={{ padding: "5px 10px", marginTop: "5px", outline: "none" }}
            type="text"
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
            value={user.email}
          />
          {!user.email && error.email && (
            <span style={{ color: "#822121" }}>{error.email}</span>
          )}
        </div>
        <div>
          <div style={{ color: "#fff" }}>Password</div>
          <input
            style={{ padding: "5px 10px", marginTop: "5px", outline: "none" }}
            type="text"
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
            value={user.password}
          />
          {!user.password && error.password && (
            <span style={{ color: "#822121" }}>{error.password}</span>
          )}
        </div>
        <div>
          <button
            style={{
              backgroundColor: "gray",
              color: "#fff",
              border: "2px solid #fff",
              padding: "5px 10px",
              marginTop: 15,
              fontWeight: "bold",
            }}
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
