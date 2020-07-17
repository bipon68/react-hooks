import React, { useState } from 'react';
import './App.css';
import { GuestList } from "./components/GuestList/GuestList";

export const App = () => {

  const [guests, setGuest] = useState([{
    id: 1,
      name: 'John Jensen',
      street: '123 Main St.',
      city: 'Chicago',
      state: 'IL',
      zip: '12345',
      phone: '555-555-1234'
  }])


  return (
    <div className="container">
      <h3>Please Sign My GuestBook</h3>
      <div className="row">
        <div className="col">
          <h5>Sign In</h5>
        </div>
        <div className="col">
          <h5>Guest</h5>
          <GuestList guests={guests}/>
        </div>
      </div>
    </div>
  );
}

// export default App;
