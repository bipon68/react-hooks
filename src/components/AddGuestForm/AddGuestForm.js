import React, { useState } from 'react'

export const AddGuestForm = (props) => {

    const initialFormState = {
        id: null,
        name: '',
        street: '',
        city: '',
        state: '',
        zip: '',
        phone: ''
    }

    const [guest, setGuest] = useState(initialFormState)

    const handleInputChanged = (event) => {
        const {name, value } = event.target;
        setGuest({...guest, [name]: value})
    }

    

    return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" className="form-control" onChange={handleInputChanged}/>
                </div>
                <div className="form-group">
                    <label htmlFor="street">Street</label>
                    <input type="text" name="street" className="form-control" onChange={handleInputChanged}/>
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input type="text" name="city" className="form-control" onChange={handleInputChanged}/>
                </div>
                <div className="form-group">
                    <label htmlFor="state">State</label>
                    <input type="text" name="state" className="form-control" onChange={handleInputChanged}/>
                </div>
                <div className="form-group">
                    <label htmlFor="zip">Zip</label>
                    <input type="text" name="zip" className="form-control" onChange={handleInputChanged}/>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" name="phone" className="form-control" onChange={handleInputChanged}/>
                </div>
                <button className="btn btn-primary" type="submit">Add New Guest</button>            
            </form>
        </div>
    )
}
