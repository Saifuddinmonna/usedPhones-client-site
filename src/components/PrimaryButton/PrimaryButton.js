import React from 'react';

const PrimaryButton = ({children, className = ''}) => {
    return (
        <button 
            className={`btn btn-primary bg-primary hover:bg-primary-dark text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 ${className}`}>
            {children}
        </button>
    );
};

export default PrimaryButton;