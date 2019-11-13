import React from 'react'
import Venue from './Venue'

export default function VenueList(props) {
    console.log("Venues", props)
    return (
        <div className="venue-list">
            <h1>{props.newLocation} {props.newType}</h1>

                <img className="hero" src="./hamburger.png"/>

                {props.venues.map((item, index) => (<Venue venue={item} key={index}/>)
                )}
        </div>
    )
}
