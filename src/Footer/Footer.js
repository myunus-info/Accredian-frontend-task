import React from 'react';

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: '#333',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        lineHeight: '3rem',
      }}
    >
      All rights reserved &copy; {new Date().getFullYear()}
    </div>
  );
};

export default Footer;
