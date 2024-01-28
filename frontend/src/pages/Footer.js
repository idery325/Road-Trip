import React from 'react';
import './Footer.css'; // Make sure to create a corresponding CSS file

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-item">
                <div className="icon home-icon">🏠</div>
                <div className="icon-text">Home</div>
            </div>
            <div className="footer-item">
                <div className="icon plan-icon">🗺️</div>
                <div className="icon-text">Plan</div>
            </div>
            <div className="footer-item">
                <div className="icon account-icon">👤</div>
                <div className="icon-text">Account</div>
            </div>
        </footer>
    );
};

export default Footer;
