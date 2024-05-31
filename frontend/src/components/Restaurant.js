import React from 'react';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

import {  VscArchive, VscEdit } from "react-icons/vsc";


function Restaurant({ restaurant, onEdit, onDelete, onAdd }) {
    return (
        <tr>
            <td>{restaurant.restaurantName}</td>
            <td>{restaurant.dateVisited.slice(0, 10)}</td>
            <td>{restaurant.reviewString}</td>

            <td>{restaurant.reviewScore}</td>
            {/* Update these icons to something that matches your style. */}
            <td><i><VscArchive onClick={() => onDelete(restaurant._id)} /></i></td>
            <td><i><VscEdit onClick={() => onEdit(restaurant)} /></i></td>
            <td></td>
        </tr>
    );
}

export default Restaurant;
