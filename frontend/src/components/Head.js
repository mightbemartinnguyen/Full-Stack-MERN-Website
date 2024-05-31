import React from 'react';
import {Link} from 'react-router-dom';
import { VscAdd } from "react-icons/vsc";

function TableHead(){
    return (
        <thead>
            <tr>
            <th title="Which Restaurants will you like to write a review for">Name</th>
                <th title="What date did you visit the restaurant">Date visited</th>
                <th title="Write your review">Write review</th>
                <th title="What score would you give the restaurant">Review score</th>
                <th title="Clicking the delete icon will quickly remove the row">Delete</th>
                <th title="Editing will occur on a new screen, which redirects">Edit</th>
                <th><Link to="/create"><i><VscAdd /></i></Link></th>
            </tr>
        </thead>

    );
}
export default TableHead;