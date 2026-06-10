import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";
import "../styles/global.css";

export default function Login() {
 
  const navigate = useNavigate();

  const handleLogin = () => {
      navigate("/account");   // goes to Account Settings
    
  };

  return (
     <div className="login-container">
      <div className="login-header">
      <h1>Signin to your<br/>
         PopX account</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
      <div className="login-form">
        <InputField label="Email Address" type="email" placeholder="Enter email address" readOnly />
        <InputField label="Password" type="password" placeholder="Enter password" readOnly />
        <Button label="Login" variant="btn-gray" onClick={handleLogin} />
      
      </div>
      </div>
  
  );
}

