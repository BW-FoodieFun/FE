import {
    FETCH_VENUE_START,
    FETCH_VENUE_SUCCESS,
    FETCH_VENUE_ERROR,
    UPDATE_LOCATION,
    UPDATE_TYPE,
    FETCH_MEAL_START,
    FETCH_MEAL_SUCCESS,
    FETCH_MEAL_ERROR,
    ONCHANGE,
    MEALS_SUCCESS,
  } from "../actions/venue";
  
  const initialState = {
    // our "success" state
    venues: [],
    // want to make sure we account for all possible states,
    // including the loading and error states
    isLoading: false,
    error: null,
    location: '',
    type: '',
    meals: [],
    formState: {
      restaurant_name:"",
      restaurant_type:"",
      item_name:"",
      item_photo:"",
      food_rating:"",
      item_comment:"",
      wait_time:"",
      date_visited:"",
    },
  };
  
  // our finite state machine written out in code--
  // all the possible states, and actions that can be taken
  // which result in a new state.
  export function reducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_MEAL_START:
        return {
          ...state,
          isLoading: true
        }
      case FETCH_MEAL_SUCCESS:
        return {
          ...state,
          meals: [...action.payload],
          isLoading: false
        }
      case FETCH_VENUE_START:
        return {
          ...state,
          isLoading: true
        };  
      case FETCH_VENUE_SUCCESS:
        return {
          ...state,
          venues: [...action.payload],
          isLoading: false
        };
      case FETCH_VENUE_ERROR:
        return {
          ...state,
          error: action.payload,
          isLoading: false
        };
      case UPDATE_LOCATION:
        return {
          ...state,
          location: action.payload
        };
      case UPDATE_TYPE:
        return {
          ...state,
          type: action.payload
        };
      case ONCHANGE:
        return{
          ...state,
          formState: {
            ...state.formState,
            [action.payload.name]:action.payload.value
          }
        };
      case MEALS_SUCCESS:
        return{
          ...state,
          meals:[
            ...action.payload
          ]
        };
      default:
        return state;
    }
  };
  