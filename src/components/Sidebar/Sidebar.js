import ControlButton from '../Buttons/ControlButton';
import HeaderButton from '../Buttons/HeaderButton';
import './../../index.css'
import './Sidebar.css';

import { GoGear } from "react-icons/go";
import { PiMagnifyingGlass } from "react-icons/pi";
import { IoKey } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";


function Sidebar({ isOpen, onClose }) {
    return (
        <>
          <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <div className="header-div">
              <HeaderButton text="Password Pwn-Check" icon={PiMagnifyingGlass} />
              <HeaderButton text="Manage Passwords" icon={IoKey} />
            </div>
            <div className="setting-div">
              <HeaderButton text="Account Settings" icon={GoGear} />
              <HeaderButton text="Login" icon={CiLogin} />
              <ControlButton text="Deutsch"></ControlButton>
            </div>
          </div>
        </>
    );
}

export default Sidebar;