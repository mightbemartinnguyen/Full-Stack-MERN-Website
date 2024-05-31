// Controllers for the Restaurant Collection

import 'dotenv/config';
import express from 'express';
import * as restaurants from './restaurants-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.

// CREATE controller ******************************************
app.post ('/restaurants', (req,res) => { 
    restaurants.createRestaurant(
        req.body.restaurantName, 
        req.body.dateVisited, 
        req.body.reviewScore,
        req.body.reviewString
        )
        .then(restaurant => {
            res.status(201).json(restaurant);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'The request could not be created due to invalid or missing parameters. Please ensure all required fields are provided with valid data.' });
        });
});
// RETRIEVE controller ****************************************************
app.get('/restaurants', (req, res) => {
    restaurants.retrieveRestaurants()
        .then(restaurant => { 
            if (restaurant !== null) {
                res.json(restaurant);
            } else {
                res.status(404).json({ error: 'Cannot retrieve restaurant, data not found.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'Bad Request, unable to retrieve restaurants. Please try again later.' });
        });
});

// RETRIEVE by ID controller
app.get('/restaurants/:_id', (req, res) => {
    restaurants.retrieveRestaurantByID(req.params._id)
    .then(restaurant => { 
        if (restaurant !== null) {
            res.json(restaurant);
        } else {
            res.status(404).json({ error: 'Not Found, No restaurants by ID found.' });
            }             
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ error: 'Bad Request, unable to retrieve restaurants by the ID. Please try again later.' });
    });

});


// UPDATE controller ************************************
app.put('/restaurants/:_id', (req, res) => {
    restaurants.updateRestaurant(
        req.params._id, 
        req.body.restaurantName, 
        req.body.dateVisited, 
        req.body.reviewScore,
        req.body.reviewString
    )
    .then(restaurant => {
        res.json(restaurant);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ error: 'Bad Request, unable to update restaurants review. Please try again later.' });
    });
});

// DELETE Controller ******************************
app.delete('/restaurants/:_id', (req, res) => {
    restaurants.deleteRestaurantById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send({ Success: 'Restaurant successfully deleted.' });
            } else {
                res.status(404).json({ Success: 'Restaurant successfully deleted.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Cannot delete the restaurant document. Please try again.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});