import React from "react";

function Footer() {
    return(
        <footer className="footer">
            <div className="container">
                <div className="footer-column">
                    <h4>Quick Links</h4>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/services">Services</a>
                    <a href="/portfolio">Portfolio</a>
                </div>
                
                <div className="footer-column">
                    <h4>Contact Us</h4>
                    <p>contact@outproindia.com</p>
                    <p>+91 80592 80592</p>
                </div>
            </div>
            <div className="Copyright">©️ 2026 Outpro.India. All Rights Reserved.</div>
        </footer>
    )
}
export default Footer;