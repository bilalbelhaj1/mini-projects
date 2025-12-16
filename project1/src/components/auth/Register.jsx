import "./auth.css";
import { account } from "../../services/appwriteClient";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function Register() {
  const [userData, setUserData] = useState({
    username:'',
    email:'',
    password:'',
    confirmPassword:''
  })

  function onChange(e) {
    setUserData(prev=>({...prev,[e.target.name]:e.target.value}))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (userData.password !== userData.confirmPassword) {
      alert("password do not match")
      return;
    }
    try {
      const results = await account.create({
        userId: uuid(),
        email: userData.email,
        password: userData.password,
        name: userData.username,
      })
    } catch(err) {
      console.log(err)
      alert("Could not register you something went wrong")
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Register</h2>
        <form onSubmit={(e)=>{handleSubmit(e)}}>
          <label>Username</label>
          <input type="text" placeholder="Enter your username" name="username" value={userData.username} onChange={(e)=>{onChange(e)}}/>

          <label>Email</label>
          <input type="email" placeholder="Enter your email" name="email" value={userData.email} onChange={(e)=>{onChange(e)}}/>

          <label>Password</label>
          <input type="password" placeholder="Enter your password" name="password" value={userData.password} onChange={(e)=>{onChange(e)}} />

          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm your password" name="confirmPassword" value={userData.confirmPassword} onChange={(e)=>{onChange(e)}} />

          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}
