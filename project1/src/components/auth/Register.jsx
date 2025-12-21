import "./auth.css";
import { v4 as uuid } from "uuid";
import { useNavigate } from "@tanstack/react-router";
import { useMutation } from "@tanstack/react-query";
import { createAccount } from "../../api/auth";

export default function Register() {
  const navigate = useNavigate();
  
  const mutation = useMutation({
    mutationFn: (formData) => {
      return createAccount(
        uuid(),
        formData.get("username"),
        formData.get("email"),
        formData.get("password"),
      )
    }
  })

  if (mutation.status === "success") {
    navigate({ to:"/login" });
  }
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Register</h2>
        <form action={mutation.mutate}>
          <label>Username</label>
          <input type="text" placeholder="Enter your username" name="username"/>

          <label>Email</label>
          <input type="email" placeholder="Enter your email" name="email"/>

          <label>Password</label>
          <input type="password" placeholder="Enter your password" name="password" />

          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm your password" name="confirmPassword" />

          <button disabled={mutation.status === "pending"} type="submit">Register</button>
        </form>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}
