import ControlButton from './Buttons/ControlButton';
import HeaderButton from './Buttons/HeaderButton';

import { ReactComponent as DeIcon } from './../icons/de_icon.svg';

function Header() {
    return (
        <div>
          <h1>PanaM</h1>
          <div>
            <HeaderButton className="header-button" text="Password Pwn-Check"></HeaderButton>
            <HeaderButton className="header-button" text="Password Manager"></HeaderButton>

            <ControlButton className="control-button" text="Settings" icon="SettingIcon"></ControlButton>
            <ControlButton className="control-button" text="Deutsch" icon="DeIcon"></ControlButton>
          </div>
        </div>
    );
}

export default Header;