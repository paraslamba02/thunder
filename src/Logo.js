import React from 'react';
import ReactDOM from 'react-dom';

const Logo = () => {
  const logostyle = {
    opacity: '0.34',
    fontSize: '13px',
    marginTop: '2%',
    color: '#c1ffd5',
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%, 0%)',
    transition: '1s all ease-out'
  };

  return (
    <div style={logostyle} className="Logo">
      Logo
    </div>
  );
}

export default Logo;
