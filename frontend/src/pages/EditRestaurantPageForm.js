import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditRestaurantPageForm = ({ restaurantToEdit }) => {
 
    const [restaurantName, setTitle]        = useState(restaurantToEdit.restaurantName);
    const [dateVisited, setDate]            = useState(restaurantToEdit.dateVisited);
    const [reviewScore, setScore]           = useState(restaurantToEdit.reviewScore);
    const [reviewString, setString]         = useState(restaurantToEdit.reviewString);


    const redirect = useNavigate();

    const editRestaurant = async () => {
        const response = await fetch(`/restaurants/${restaurantToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                restaurantName: restaurantName, 
                dateVisited: dateVisited, 
                reviewScore: reviewScore,
                reviewString: reviewString
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Review updated successfully`);
            redirect("/log");

        } else {
            const errMessage = await response.json();
            alert(`Error, cannot update restaurant review. The review you are trying to update does not exist. Please try again.`);
            redirect("/update");

        }
    }

    return (
        <>
        <article>
        <h2 className="add-restaurant-heading">Edit a Restaurant Review</h2>
            <p>Please enter the new information to update your review. Thank you!</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
            <fieldset name="logForm">
                    <legend>Update Restaurant Review</legend>
                    <label for="restaurantName">Restaurant name</label>
                    <input
                        type="text"
                        value={restaurantName}
                        onChange={e => setTitle(e.target.value)} 
                        id="restaurantName" />
                    
                    <label for="dateVisited">Date visited</label>
                    <input
                        type="date"
                        value={dateVisited}
                        onChange={e => setDate(e.target.value)} 
                        id="dateVisited" />

                    <label for="reviewScore">Score out of 100</label>
                    <input
                        type="number"
                        value={reviewScore}
                        onChange={e => setScore(e.target.value)} 
                        id="reviewScore" 
                        min="0"
                        max="100" 
                        />

                    <label for="reviewString">Review comments</label>
                    <textarea
                        name="reviewString"  
                        placeholder="Enter your text here"
                        value={reviewString}
                        onChange={e => setString(e.target.value)} 
                        id="reviewString" />


                    <label for="submit">
                    <button
                        onClick={editRestaurant}
                        id="submit"
                    >Update</button></label>
                </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditRestaurantPageForm;