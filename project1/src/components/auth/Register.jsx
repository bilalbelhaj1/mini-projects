import "./auth.css";

export default function Register() {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Register</h2>
        <form>
          <label>Username</label>
          <input type="text" placeholder="Enter your username" />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" />

          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm your password" />

          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}
