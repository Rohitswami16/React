import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const { setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");   // <-- useState, not useContext
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username }); // usually you don't store raw password
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
          autoComplete="username"
        />{" "}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          autoComplete="current-password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
