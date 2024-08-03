import { ReactComponent as DeIcon } from './../../icons/de_icon.svg';
import { ReactComponent as UsIcon } from './../../icons/en_icon.svg';
import { ReactComponent as SettingIcon } from './../../icons/setting-icon.svg';

import React from 'react';
import './Buttons.css'

function ControlButton({ text, onClick, icon:Icon }) {
    return (
        <button className="button-with-icon" onClick={onClick}>
            {Icon && <Icon className="icon" />}
            {text && <span className="label">{text}</span>}
        </button>
      );
}

export default ControlButton;