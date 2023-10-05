import React, { useState } from 'react';
import '/Users/prabhat/Desktop/BGMI-UC/bgmiuc/src/App.css'; 

function Appdrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  

  return (
    <div>
      <button onClick={toggleDrawer}>=</button>
      {isOpen && (
        <div className="drawer">
          <p>Drawer Content Goes Here</p>
        </div>
      )}
    </div>
  );
}

export default Appdrawer;
