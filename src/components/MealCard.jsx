import React from 'react'


const MealCard = props => {

    return(
        <>
            <h1>{props.resturant_name}</h1>
            <h2>{props.resturant_type}</h2>
            <p>Item Name: {props.item_name}</p>
            <img src={props.item_photo}/>
            <p>Food Rating: {props.food_rating}</p>
            <p>Comments: {props.item_comment}</p>
            <p>Wait Time: {props.wait_time}</p>
            <p>Date Visited: {props.date_visited}</p>
        </>
    )
}

export default MealCard;