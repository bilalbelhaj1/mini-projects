import { useContext, useState } from "react";
import "./auth.css";
import { account } from "../../services/appwriteClient";
import { UserContext } from "../../contexts/userContext";
import { useNavigate } from "@tanstack/react-router";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const session = await account.createEmailPasswordSession(
        user.email,
        user.password
      );

      const currentUser = await account.get();

      login({
        userId: currentUser.$id,
        username: currentUser.name || currentUser.email,
      });

      navigate({ to: "/movies" });

    } catch (err) {
      console.error("Login failed:", err);
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={user.email}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, email: e.target.value }))
            }
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={user.password}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, password: e.target.value }))
            }
          />

          <button type="submit">Login</button>
        </form>

        <p>
          Don't have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
}
