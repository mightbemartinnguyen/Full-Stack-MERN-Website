import React from 'react';
import Restaurant from './Restaurant';
import Head from './Head';
// Change the function names and parameters 
// to fit your portfolio topic and schema.

function RestaurantList({ restaurants, onDelete, onEdit, onAdd }) {
    return (
        <article>
            <legend>Log of Restaurant Reviews</legend>
            <table id="restaurants">
                <Head />
                <thead>
                   
                </thead>
                <tbody>
                    {restaurants.map((restaurant, i) => 
                        <Restaurant 
                            restaurant={restaurant} 
                            key={i}
                            onDelete={onDelete}
                            onEdit={onEdit}
                        />)}
                </tbody>
            </table>
        </article>
    );
}

export default RestaurantList;
