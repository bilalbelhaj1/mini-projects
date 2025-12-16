import { useContext, useState } from "react";
import "./auth.css";
import { account } from "../../services/appwriteClient";
import { UserContext } from "../../contexts/userContext";
import { redirect, useNavigate } from "@tanstack/react-router";
export default function Login() {
  const [user, setUser] = useState({
    email:'',
    password:''
  });
  const navigate = useNavigate();

  const { login } = useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault()
    console.table(user);

    try {
      /* const result = await account.createEmailPasswordSession({
        email: user.email ,
        password: user.password
      }); */
      login({
        userId: "hdgdgdgh",
        username:"bilal belhaj",
      })
      redirect("/movies")
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="email" placeholder="Enter your email" name="email" value={user.email} onChange={(e)=>{setUser(prev=>({...prev, email:e.target.value}))}}  />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" name="password" value={user.password} onChange={(e)=>{setUser(prev=>({...prev, password:e.target.value}))}} />

          <button type="submit" >Login</button>
        </form>
        <p>
          Don't have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
}
