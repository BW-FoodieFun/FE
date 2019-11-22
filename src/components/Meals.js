import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import {fetchMeals, onChange, onSubmit} from '../actions/venue'
import {Link} from 'react-router-dom'
import axios from 'axios'
import MealCard from './MealCard'


function Meals(props) {
    console.log("meals",props)
    console.log("mealsARRAY",props.meals)
    useEffect(()=>{
        props.fetchMeals()
    },[])

    return (
        <div>
            <Link to="/venues">Venues</Link>
            <h1>Meals</h1>
            <div className="optionsbar">
              <form onSubmit={e => props.onSubmit(e, props.formState)}>
                <input name="restaurant_name" type="text"  onChange={props.onChange} placeholder= "Restaurant Name"/>
                <input name="restaurant_type" type="text" placeholder= "Restaurant Type" onChange={props.onChange}/>
                <input name="item_name" type="text" placeholder="Menu Item" onChange={props.onChange}/>
                <input name="item_photo" type="text" placeholder= "Photo of Item" onChange={props.onChange}/>
                <input name="food_rating" type="number" placeholder= "Rating of food" onChange={props.onChange}/>
                <input name="item_comment" type="text" value={props.formState.item_comment}  placeholder="Leave a comment" onChange={props.onChange} />
                <input name="wait_time" type="text" value={props.formState.wait_time} placeholder="How long did you wait?" onChange={props.onChange} />
                <input name="date_visited" type="date" onChange={props.onChange} />
                <button type="submit">Submit!</button>
            </form>
            </div>
            <div className="mealcard">
              {props.meals.map(meal => (
                <MealCard
                  restaurant_name={meal.restaurant_name}
                  restaurant_type={meal.restaurant_type}
                  item_name={meal.item_name}
                  item_photo={meal.item_photo}
                  food_rating={meal.food_rating}
                  item_comment={meal.item_comment}
                  wait_time={meal.wait_time}
                  date_visited={meal.date_visited}
              />
            ))}
            </div>
        </div>
    )
}

//connect
function mapStateToProps(state) {
    console.log(state);
    return {
      meals: state.meals,
      formState: state.formState,
    };
  }
  
  const mapDispatchToProps = {
    // send a version of our action creator that's attached to
    // the dispatcher to the component as a prop
    fetchMeals,
    onChange,
    onSubmit
  };

export default connect(mapStateToProps, mapDispatchToProps)(Meals);
