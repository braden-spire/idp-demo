import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";

import './Logout.css';


const Logout = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          You've logged out of the EnergyCo Demo
        </p>
      </header>
    </div>
  );

}

export default Logout;
