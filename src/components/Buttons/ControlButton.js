import React from 'react';
import './Buttons.css'

function ControlButton({ text, onClick, icon:Icon }) {
    return (
        <button className="control-button" onClick={onClick}>
            {Icon && <Icon className="icon" />}
            {text && <span className="label">{text}</span>}
        </button>
      );
}

export default ControlButton;