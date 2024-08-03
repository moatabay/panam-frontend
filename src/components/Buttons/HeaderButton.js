import React from 'react';
import './Buttons.css'

function HeaderButton({ text, onClick }) {
  return (
    <button className="header-button" onClick={onClick}>
      {text}
    </button>
  );
}

export default HeaderButton;