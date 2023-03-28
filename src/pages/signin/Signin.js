import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Authwrapper from "../../component/authWrapper/AuthWrapper";
import TextInputFields from "../../component/textInputFields/TextInputFields";

const SignIn = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState({ email: "", password: "" });
  const getUserLocal = JSON.parse(localStorage.getItem("user")) || {};
  const navigate = useNavigate();

  const handleSignIn = () => {
    // console.log(getUserLocal);
    if (!user.email || !user.password) {
      setError({
        ...error,
        email: "Email is required",
        password: "Password is required",
      });
    }
    if (
      getUserLocal.email === user.email &&
      user.email &&
      getUserLocal.password === user.password &&
      user.password
    ) {
      setUser({ email: "", password: "" });
      setError({ email: "", password: "" });
      navigate("/");
    }
  };

  return (
    <Authwrapper title="Sign In" handleSubmit={handleSignIn}>
      <div>
        <TextInputFields
          value={user.email}
          user={user.email}
          error={error.email}
          invalidError="Email is invalid"
          getUserLocal={getUserLocal.email}
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
          invalidError="Password is invalid"
          getUserLocal={getUserLocal.password}
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

export default SignIn;
