import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (username === "admin" && password === "1234") {
      localStorage.setItem("isAdmin", "true");
      nav("/admin");
    } else {
      alert("Invalid Credentials");
    }
  }

  return (
    <div className="login-page">
      <h1>Admin Login 🔐</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}
export default Login;
