import { React, useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import RestaurantList from '../components/RestaurantList';

function RestaurantsPage({ setRestaurant }) {
    // Use the Navigate for redirection
    const redirect = useNavigate('/log');
    
    // Use state to bring in the data
    const [restaurants, setRestaurants] = useState([]);

    // RETRIEVE the entire list of Restaurants
    const loadRestaurants = async () => {
        const response = await fetch('/restaurants');
        const restaurants = await response.json();
        
        setRestaurants(restaurants);
    } 
    

    // UPDATE a single Restaurant
    const onEditRestaurant = async restaurant => {
        setRestaurant(restaurant);
        redirect("/update");
    }


    // DELETE a single Restaurant 
    const onDeleteRestaurant = async _id => {
        try {
            await fetch(`/restaurants/${_id}`, { method: 'DELETE' });
            loadRestaurants();  
        } catch (error) {
            console.error(`Error deleting restaurant with id=${_id}:`, error);
            alert('Error deleting the restaurant. Please try again.');
        }
    }


    // LOAD all the Restaurants
    useEffect(() => {
        loadRestaurants();
    }, []);

    
    // DISPLAY the Restaurants
    return (
        <>
            <h2>List of Restaurants</h2>
            <p>This page will keep track of your resturant reviews, including names, dates, score, and text for each restaurants. Please 
                either click the Red Submit button or the + icon to create a new Review. Click the Edit icon in the table or the red update button 
                to edit a existing review. Thank you.
            </p>
            < nav className="localNav">
            <Link to="/create">Submit a Restaurant Review</Link>
            <Link to="/update">Update a specific Review</Link>
            </nav>
            
            <RestaurantList 
                restaurants={restaurants} 
                onEdit={onEditRestaurant} 
                onDelete={onDeleteRestaurant} 
            />
        </>
    );
}

export default RestaurantsPage;