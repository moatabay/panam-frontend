import React from 'react';
import './Buttons.css'

function HeaderButton({ text, onClick, icon:Icon }) {
  return (
    <button className="header-button" onClick={onClick}>
      {Icon && <Icon className="icon" />}
      {text}
    </button>
  );
}

export default HeaderButton;