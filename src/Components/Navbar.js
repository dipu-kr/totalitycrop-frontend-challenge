import React, { useState } from "react";
import "../Styles/navbar.css";
const teslaLogo = process.env.PUBLIC_URL + "/icons/Teslalogo.svg";

const close = process.env.PUBLIC_URL + "/icons/close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const mobileControl = () => {
    setMobileMenu(!mobileMenu);
  };
  const menuControl = () => {
    setMenu(!menu);
  };
  return (
    <div className="navbar-container">
      <div className="nav-left">
        <img src={teslaLogo} alt="logo" />
      </div>

      <div className="link-container">
        <div className="nav-center">
          <ul>
            <li>Model S</li>
            <li>Model 3</li>
            <li>Model X</li>
            <li>Model Y</li>
            <li>Solar Roof</li>
            <li>Solar Panels</li>
          </ul>
        </div>
        {/* --------desktop menu---------- */}
        <div className="nav-right">
          <p>Shop</p>
          <p>Account</p>
          <div className="desktop-menu" onClick={menuControl}>
            {menu ? (
              <p>
                <img
                  src={close}
                  alt="close-icon"
                  style={{ width: "16px", color: "gray", margin: "0 15px" }}
                />
              </p>
            ) : (
              <p>Menu</p>
            )}
          </div>
        </div>
      </div>
      <div className={menu ? "openMenu" : "openMenu closeMenu"}>
        <p>Existing Inventory</p>
        <p>Used Inventory</p>
        <p>Trade-In</p>
        <p>Test Drive</p>
        <p>Insurance</p>
        <p>Cybertruck</p>
        <p>Roadster</p>
        <p>Semi</p>
        <p>Charging</p>
        <p>Powerwall</p>
        <p>Commercial Energy</p>
        <p>Utilities</p>
        <p>Find Us</p>
        <p>Support</p>
        <p>About</p>
      </div>
      {/* ----------------mobile menu------------- */}
      <div className="mobile-menu" onClick={mobileControl}>
        {mobileMenu ? (
          <p>
            <img src={close} alt="close-icon" className="close-icon" />
          </p>
        ) : (
          <p className="mobile-menu">Menu</p>
        )}
      </div>
      <div className={mobileMenu ? "openMobile" : "openMobile closeMobile"}>
        <p>Model S</p>
        <p>Model 3</p>
        <p>Model X</p>
        <p>Model Y</p>
        <p>Solar Roof</p>
        <p>Solar Panels</p>
        <p>Shop</p>
        <p>Account</p>
        <p>Existing Inventory</p>
        <p>Used Inventory</p>
        <p>Trade-In</p>
        <p>Test Drive</p>
        <p>Insurance</p>
        <p>Cybertruck</p>
        <p>Roadster</p>
        <p>Semi</p>
        <p>Charging</p>
        <p>Powerwall</p>
        <p>Commercial Energy</p>
        <p>Utilities</p>
        <p>Find Us</p>
        <p>Support</p>
        <p>About</p>
      </div>
    </div>
  );
};

export default Navbar;
