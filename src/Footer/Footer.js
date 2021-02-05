import React from "react";
import footerImg from "../Image/footerImg.svg";
import footerLogo from "../Image/logo2.svg";
function Footer() {
  return (
    <div>
      <div className="footer-section1">
        <img className="footeImg" src={footerImg} alt="footerImg" />

        <div className="discfooter">
          <h3 style={{ fontSize: "47px" }}>Being first has its perks</h3>
          <p>
            Sign up to get more information about Bose, exclusive first looks at
            promotions, new products and more.
          </p>
          <input className="input" placeholder="Your email Here" />
          <button className="btnsign">SIGN UP</button>
        </div>
      </div>
      <div className="discfooter2">
        <img className="logo2" src={footerLogo} alt="footerlogo" />

        <div className="footerList">
          <ul>
            <li>Headphones</li>
            <li>Speakers</li>
            <li>Audio sunglasses</li>
            <li>Support</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
