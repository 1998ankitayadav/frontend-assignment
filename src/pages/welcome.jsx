import { Link } from "react-router-dom";
import Button from "../components/Button";
import "../styles/global.css";

export default function Welcome() {
  return (
    <div className="container">
      
      <h1>Welcome to PopX</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="form-box">
        <Link to="/signup">
          <Button label="Create Account" variant="btn-primary" />
        </Link>
        <br /><br />
        <Link to="/login">
          <Button label="Already Registered? Login" variant="btn-secondary" />
        </Link>
      </div>
      </div>
   
  );
}

