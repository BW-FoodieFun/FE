import React, {useState, useEffect} from 'react'
import { fetchVenues, updateLocation, updateType } from "../actions/venue";
import { connect } from "react-redux";
import Venue from './Venue'

function Venues(props) {

  const [newLocation, setNewLocation] = useState("Detroit");
  const [newType, setNewType] = useState("cravings");
  console.log("venues", props)

useEffect(() => {
    // kick off our asyncronous action creator
    props.fetchVenues(newLocation, newType);
  }, []);

  useEffect(()=>{
    props.fetchVenues(newLocation, newType)
  },[newType])

  
  const handleInputChanges = e => {
    setNewLocation(e.target.value);
  };


  //Ask Skylar if there is a way to 
  const handleSelectChanges = e => {
    setNewType(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    // setNewLocation("");
    props.updateLocation(newLocation || props.location);
    props.fetchVenues(newLocation, newType)
  };

    return (
        <div>
            <h1>{props.newLocation} {props.newType}</h1>

            <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="newLocation"
                // placeholder={props.location} 
                placeholder="city"
                value={'' || newLocation}
                onChange={handleInputChanges}
            />
            <select name="newType" onChange={handleSelectChanges}>
                <option value='Coffee'>Coffee</option>
                <option value='Restaurants'>Restaurants</option>
                <option value="Events">Events</option>
                <option value="Brewery">Brewery</option>
            </select>
            <button type="submit">Submit</button>
            </form>

                <img className="hero" src="../assets/hamburger.png" alt="hamburger"/>

                <div className="venue-list">
                {props.venues.map((item, index) => (<Venue venue={item} key={index}/>)
                )}
                </div>
               
        </div>
    )
}
//connect
function mapStateToProps(state) {
  console.log(state);
  return {
    isDogLoading: state.isLoading,
    venues: state.venues,
    dogError: state.error
  };
}

const mapDispatchToProps = {
  // send a version of our action creator that's attached to
  // the dispatcher to the component as a prop
  fetchVenues,
  updateLocation,
  updateType
};

export default connect(mapStateToProps, mapDispatchToProps)(Venues);