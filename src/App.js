import React from 'react';
import './App.css';
import { GuestList } from "./components/GuestList/GuestList";

export const App = () => {
  return (
    <div className="container">
      <h3>Please Sign My GuestBook</h3>
      <div className="row">
        <div className="col">
          <h5>Sign In</h5>
        </div>
        <div className="col">
          <h5>Guest</h5>
          <GuestList />
        </div>
      </div>
    </div>
  );
}

// export default App;
