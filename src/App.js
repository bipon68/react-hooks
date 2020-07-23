import React, { useState, useEffect } from 'react';
import './App.css';
import { GuestList } from "./components/GuestList/GuestList";
import { AddGuestForm } from './components/AddGuestForm/AddGuestForm';
import { EditGuestForm } from './components/EditGuestForm/EditGuestForm';

export const App = () => {

  const initialFormState = {
    id: 1,
    name: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    phone: ''
}

  const [guests, setGuest] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentGuest, setCurrentGuest] = useState(initialFormState)

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
const editGuest = (guest) => {
  setEditing(true);

  setCurrentGuest({id: guest.id, name: guest.name, street: guest.street, state: guest.state, zip: guest.zip, phone: guest.phone})
}
const updateGuest = (id, updateGuest) => {
  setEditing(false);

  setGuest(guests.map(guest =>(guest.id === id ? updateGuest: guest)))
}


  return (
    <div className="container">
      <h3>Please Sign My GuestBook</h3>
      <div className="row">
        <div className="col">
        {
          editing ? (
            <div>
              <h3>Edit Guest</h3>
              <EditGuestForm editing={editing} setEditing={setEditing} currentGuest={currentGuest} updateGuest={updateGuest} />
            </div>
          ): (
            <div>
              <h5>Sign In</h5>
              <AddGuestForm addGuest={addGuest} />
            </div>
          )
        }
          
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
