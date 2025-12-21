import "./auth.css";
import { useNavigate } from "@tanstack/react-router";
import { login } from "../../api/auth";
import { useMutation } from "@tanstack/react-query";

export default function Login() {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (formData) => {
      return login(
        formData.get("email"),
        formData.get("password"),
      );
    }
  })

  if (mutation.status === 'success') {
    navigate({to:"/movies"});
  }

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>

        <form action={mutation.mutate}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
          />

          <button type="submit" disabled={mutation.status === "pending"}>Login</button>
        </form>

        <p>
          Don't have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
}
