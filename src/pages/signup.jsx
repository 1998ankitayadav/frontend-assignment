import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";
import "../styles/global.css";

export default function Signup() {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/account");   // goes to Account Settings
    
  };
  return (
    <div className="signup-container">
      <div className="signup-header">
      <h1>Create your
        <br/> PopX account</h1>
         </div>
      <div className="form-box">
        <div className="form-label">
        <InputField label="Full Name*" placeholder="Marry Doe" />
        <InputField label="Phone number*" type="tel" placeholder="Marry Doe" />
        <InputField label="Email address*" type="email" placeholder="Marry Doe" />
        <InputField label="Password*" type="text" placeholder="Marry Doe" />
        <InputField label="Company name*" placeholder="Marry Doe" /></div>
      </div>
        <p>Are you an Agency?</p>
        <div className="signup-radio">
        <label>
          <input type="radio" name="agency" checked readOnly /> Yes</label>
        <label>
          <input type="radio" name="agency" disabled /> No
          </label>
        </div>
        {/* <br /><br /> */}
       
         <Button className="create-account"
         label="Create Account" 
         variant="btn-primary" 
         onClick={handleSignup} />
      </div>
    // </div>
  );
}
