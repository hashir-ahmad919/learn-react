import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

/**
 * Here we did all the process for sending data
 * @returns nothing
 */

function Login() {
  const [username, setUsernamae] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsernamae(e.target.value)}
        placeholder="username"
      />
      {"  "}
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={handleSubmit}>Submit </button>
    </div>
  );
}

export default Login;
