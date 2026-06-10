import "../styles/global.css";

export default function AccountSettings() {
  return (
    <div className="account-container">
      {/*  White box heading */}
      <div className="account-header">Account Settings</div>

      {/* Profile section */}
      <div className="profile-box">
        <img 
          src="/profile.jpg"   
          alt="Profile" 
          style={{ width: "100px", height: "100px", borderRadius: "50%" }} 
        />
        <div className="profile-text">
          <h2>Marry Doe</h2>
          <p>marry@gmail.com</p>
          
        </div>
      </div>
      <p className="profile-para"> 
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr.  
      Sed diam nonumy eirmod tempor invidunt ut labore.  
      At vero eos et accusam et justo duo dolores.  
      </p>
      {/*  Divider line */}
      <div className="profile-divider"></div>
    </div>
  );
}


