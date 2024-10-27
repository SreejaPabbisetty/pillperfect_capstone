import React, { useState } from 'react';
import './MenuPage.css';
import 'font-awesome/css/font-awesome.min.css';  // Import Font Awesome
import { useNavigate, Link } from 'react-router-dom';

function MenuPage() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleCameraClick = () => {
    document.getElementById('cameraInput').click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("File selected:", file);
    }
  };

  return (
    <div className="container">
      <div className="menu-container">
        {/* Replace with Font Awesome Icon */}
        <i className="fa fa-bars fa-2x menu-icon" onClick={toggleMenu}></i>
        <div className={`menu ${menuVisible ? 'show' : ''}`}>
          <Link to="/about">About</Link>
          <Link to="/history">History</Link>
          <Link to="/calculator">Calculator</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/settings">Settings</Link>
          <Link to="#" onClick={handleCameraClick}>Scan & Upload</Link>
        </div>
        <button className="upload-button" onClick={handleCameraClick}>
          Upload
        </button>
      </div>
      <input
        id="cameraInput"
        type="file"
        accept="image/*"
        capture="camera"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <div className="content">
        <p>Upload your Prescription</p>
      </div>
    </div>
  );
}

export default MenuPage;