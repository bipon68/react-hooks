import React from 'react';

export const GuestList = (props)=> {
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Address</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.guests.length > 0 ? (
                            props.guests.map(guest => (
                                <tr key={guest.id}>
                                    <td>{guest.name}</td>
                                    <td>
                                    <button type="button" className="btn btn-warning mr-2">Edit</button>
                                    <button type="button" className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                No Guest
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
