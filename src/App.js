import React, { useState, useEffect } from 'react';
import './App.css';
import { GuestList } from "./components/GuestList/GuestList";
import { AddGuestForm } from './components/AddGuestForm/AddGuestForm';

export const App = () => {

  const [guests, setGuest] = useState([])

  useEffect(() => {
    setGuest([
      {
        id: 1,
        name: 'John Jensen',
        street: '123 Main St.',
        city: 'Chicago',
        state: 'IL',
        zip: '12345',
        phone: '555-555-1234'
    },
    {
      id: 2,
        name: 'Limon Jensen',
        street: '123 Main St.',
        city: 'Chicago',
        state: 'IL',
        zip: '12345',
        phone: '555-555-1234'
    }
  ])

    // alert('useEffect fired')
  }, [])

  const addGuest = (guest) => {
    guest.id = guests.length + 1;
    setGuest([...guests, guest])
}

const deleteGuest = (id) => {
  setGuest(guests.filter(guest => guest.id !=id))
}



  return (
    <div className="container">
      <h3>Please Sign My GuestBook</h3>
      <div className="row">
        <div className="col">
          <h5>Sign In</h5>
          <AddGuestForm addGuest={addGuest} />
        </div>
        <div className="col">
          <h5>Guest</h5>
          <GuestList deleteGuest={deleteGuest} guests={guests}/>
        </div>
      </div>
    </div>
  );
}

// export default App;
