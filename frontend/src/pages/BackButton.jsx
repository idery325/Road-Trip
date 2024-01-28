import React from 'react';
import '../styling/BackButton.css'; // Ensure this file exists and contains the appropriate styles

const BackButton = ({ to }) => {
    return (
        <a href={to} className="back-button">
        ←
        </a>
    );
};

export default BackButton;