import React from 'react';

const Alert = ({ text }) => {
  console.log('Renderizando Alert');
  return <div className="alert">{text}</div>;
};

export default Alert;