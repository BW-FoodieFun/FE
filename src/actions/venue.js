import axios from "axios";
import api from '../utils/api'

export const FETCH_MEAL_START = "FETCH_MEAL_START";
export const FETCH_MEAL_SUCCESS = "FETCH_MEAL_SUCCESS";
export const FETCH_MEAL_ERROR = "FETCH_MEAL_ERROR";

export function fetchMeals(){
  return dispatch => {
    dispatch({type: FETCH_MEAL_START})
    api()
    .get('/meals')
    .then(res => {
      console.log(res)
      dispatch({type: FETCH_MEAL_SUCCESS, payload: res.data})
    })
  }
}


export const FETCH_VENUE_START = "FETCH_VENUE_START";
export const FETCH_VENUE_SUCCESS = "FETCH_VENUE_SUCCESS";
export const FETCH_VENUE_ERROR = "FETCH_VENUE_ERROR";


export const UPDATE_LOCATION = "UPDATE_LOCATION";
export const UPDATE_TYPE = "UPDATE_TYPE";

// console.log("ID",REACT_APP_ID)

export function updateLocation(city) {
  return dispatch => {
    dispatch({ type: UPDATE_LOCATION, payload: city });
  };
}

export function updateType(type){
  return dispatch => {
    dispatch({type: UPDATE_TYPE, payload: type})
  }
}

export function fetchVenues(city, queryType) {
    const REACT_APP_ID = process.env.REACT_APP_ID;
    const REACT_APP_SECRET = process.env.REACT_APP_SECRET;
    // console.log(REACT_APP_ID)
  // this is our "thunk" function. redux-thunk middleware
  // automatically gives us access to the dispatcher as a parameter
  return dispatch => {
    // we can kick off as many actions as we want,
    // whenever we want. allows our action creator to be asyncronous.
    dispatch({ type: FETCH_VENUE_START });

    axios
    .get(`https://api.foursquare.com/v2/venues/search?client_id=${REACT_APP_ID}&client_secret=${REACT_APP_SECRET}&v=20180323&limit=20&near=${city}&query=${queryType}&&radius=10000`)
    .then(res => {
        // Code for handling API response
        console.log("FSQ", res.data.response.venues)
        dispatch({ type: FETCH_VENUE_SUCCESS, payload: res.data.response.venues});
    })
    .catch(function() {
        // Code for handling errors
    });
  };
}
