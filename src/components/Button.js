// src/components/ButtonAction.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ButtonAction = ({ text, redirectTo, onClick, className }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (redirectTo) {
      navigate(redirectTo); // redirige a otra vista
    } else if (onClick) {
      onClick(); // ejecuta función personalizada (ej. abrir modal)
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`btn btn-primary ${className}`}
    >
      {text}
    </button>
  );
};

export default ButtonAction;
