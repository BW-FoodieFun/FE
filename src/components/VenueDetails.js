import React, {useState, useEffect} from 'react'
export default function VenueDetails(props) {
    console.log("venDETails", props.history.location.state.venue)
    const venDetails = props.history.location.state.venue
    // const [venue, setVenue] = useState();
    const id = props.match.params.id;


    return (
        <div>
            <h1>{venDetails.name}</h1>
        </div>
    )
}
