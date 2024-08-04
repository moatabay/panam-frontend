import React, { useState } from 'react';
import './App.css'

import Sidebar from './Sidebar/Sidebar';
import ControlButton from './Buttons/ControlButton';

import { GoSidebarExpand } from "react-icons/go";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      <header className="App-header">
        <ControlButton onClick={toggleSidebar} icon={GoSidebarExpand} />
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <div className="content">
          <h1>Welcome to the App</h1>
          <p>Click the button to open or close the sidebar.</p>
        </div>
      </header>
    </div>
  );
}

export default App;