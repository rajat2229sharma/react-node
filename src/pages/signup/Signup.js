import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Authwrapper from "../../component/authWrapper/AuthWrapper";
import TextInputFields from "../../component/textInputFields/TextInputFields";

const Signup = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

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
      navigate("/signin");
    }
  };

  return (
    <Authwrapper title="Sign Up" handleSubmit={handleSignUp}>
      <div>
        <TextInputFields
          value={user.name}
          user={user.name}
          error={error.name}
          // invalidError="Name is invalid"
          // getUserLocal={getUserLocal.email}
          label="Name"
          type="text"
          handleChange={(e) => {
            setUser({ ...user, name: e.target.value });
          }}
        />
        <TextInputFields
          value={user.email}
          user={user.email}
          error={error.email}
          // invalidError="Email is invalid"
          // getUserLocal={getUserLocal.email}
          label="Email"
          type="text"
          handleChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
        />
        <TextInputFields
          value={user.password}
          user={user.password}
          error={error.password}
          // invalidError="Password is invalid"
          // getUserLocal={getUserLocal.password}
          label="Password"
          type="text"
          handleChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
        />
      </div>
    </Authwrapper>
  );
};

export default Signup;
