import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {fetchMeals} from '../actions/venue'

function Meals(props) {
    console.log("meals",props)
    console.log("mealsARRAY",props.meals)
    useEffect(()=>{
        props.fetchMeals()
    },[])

    return (
        <div>
            meals
        </div>
    )
}

//connect
function mapStateToProps(state) {
    console.log(state);
    return {
      meals: state.meals,
    };
  }
  
  const mapDispatchToProps = {
    // send a version of our action creator that's attached to
    // the dispatcher to the component as a prop
    fetchMeals,
  };

export default connect(mapStateToProps, mapDispatchToProps)(Meals);
