import "../styles/global.css";
import avatar from "../assets/avatar.png";
import cameraIcon from "../assets/camera-icon.png";

export default function AccountSettings() {
  return (
    <div className="account-container">
      {/*  White box heading */}
      <div className="account-header">Account Settings</div>

      {/* Profile section */}
      <div className="profile-box">
        <img 
          src={avatar}
          alt="Profile" 
          className="profile-pic"
          style={{ width: "100px", height: "100px", borderRadius: "50%" }} 
        />
         <img src={cameraIcon} 
         alt="Camera"
        className="camera-icon" />
        <div className="profile-text">
          <h2>Marry Doe</h2>
          <p>marry@gmail.com</p>
          
        </div>
      </div>
      <p className="profile-para"> 
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr.  
      Sed diam nonumy eirmod tempor invidunt ut labore.  
      Labore Et dolore magna aliquyam erat, sed diam.
      </p>
      {/*  Divider line */}
      <div className="profile-divider"></div>

       {/* ✅ Footer ke neeche line */}
     <div className="footer-divider">
    </div>
    </div>
  );
}


