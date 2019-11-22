import React from 'react'
import { connect } from 'react-redux'
import {onDelete} from '../actions/venue'


const MealCard = ({restaurant_name, restaurant_type, item_name,item_photo,food_rating, item_comment, wait_time, date_visited, id, onDelete }) => {
    return(
        <div className="mealcard">

            <h1>Restaurant Name: {restaurant_name}</h1>
            <h2>Restaurant Type: {restaurant_type}</h2>
            <p>Item Name: {item_name}</p>
            <img src={item_photo}/>
            <p>Food Rating: {food_rating}</p>
            <p>Comments: {item_comment}</p>
            <p>Wait Time: {wait_time}</p>
            <p>Date Visited: {date_visited}</p>
            <button className="butt" type="submit" onClick={e => onDelete(e, id)}>Delete</button>
       </div>
    )
}

function mapStateToProps(state) {
    console.log(state);
    return {
      meals: state.meals,
      formState: state.formState,
    };
  }

  const mapDispatchToProps = {
    onDelete
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(MealCard);