import React, { useState, useContext} from "react";
import UserContext from "../context/UserContext";

function Login() {
  const { setUser } = useContext(UserContext);
  const { username, setUsername } = useContext("");
  const { password, setPassword } = useContext("");

  const handleSubmit = () => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={handleSubmit}>Login</button>
    </>
  );
}

export default Login;
