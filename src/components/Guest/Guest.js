import React from 'react'

export const Guest = (props) => {
    return (
        <div>
            <address>
                <strong>{props.guest.name}</strong><br/>
                {props.guest.street}<br/>
                {props.guest.city},{props.guest.state} {props.guest.zip}<br/>
                {props.guest.phone}
            </address>
        </div>
    )
}
