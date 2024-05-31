import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddRestaurantPageForm = () => {

    const [restaurantName, setTitle]        = useState('');
    const [dateVisited, setDate]            = useState('');
    const [reviewScore, setScore]           = useState('');
    const [reviewString, setString]         = useState('');

    
    const redirect = useNavigate();

    const addRestaurant = async () => {
        const newRestaurant = { restaurantName, dateVisited, reviewScore, reviewString };
        const response = await fetch('/restaurants', {
            method: 'post',
            body: JSON.stringify(newRestaurant),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`Restaurant review added successfully! Thank you.`);
            redirect("/log");
        } else {
            alert(`Please fill out all available information before submitting the form. Thank you.`);
            redirect("/create");
        }
    };


    return (
        <>
        <article>
            <h2 className="add-restaurant-heading">Submit a restaurant review</h2>
            <p>Please fill in all forms in order to submit your restaurant review. Thank You!</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset name="logForm">
                    <legend>Review Form</legend>
                    <label for="restaurantName">Restaurant name</label>
                    <input
                        type="text"
                        placeholder="Name of the restaurant"
                        value={restaurantName}
                        onChange={e => setTitle(e.target.value)} 
                        id="restaurantName" 
                        required/>
                    
                    <label for="dateVisited">Date visited</label>
                    <input
                        type="date"
                        value={dateVisited}
                        placeholder="Date visited"
                        onChange={e => setDate(e.target.value)} 
                        id="dateVisited" 
                        required/>

                    <label for="reviewScore">Score out of 100</label>
                    <input
                        type="number"
                        placeholder="--"
                        value={reviewScore}
                        onChange={e => setScore(e.target.value)} 
                        id="reviewScore"
                        min="0"
                        max="100" 
                        required/>
                    
                    <label for="reviewString">Review comments</label>
                    <textarea
                        name="reviewString"  
                        placeholder="Enter your text here"
                        value={reviewString}
                        onChange={e => setString(e.target.value)} 
                        id="reviewString" 
                        required/>

                    <label for="submit">
                    <button
                        type="submit"
                        onClick={addRestaurant}
                        id="submit"
                    >Submit  Review</button></label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default AddRestaurantPageForm;