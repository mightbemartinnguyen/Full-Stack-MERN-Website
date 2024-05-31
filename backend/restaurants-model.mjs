// Models for the Restaurant Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: '500. You have not connected to MongoDB server. Please try again' });
    } else  {
        console.log('You have successfully connected to MongoDB, please continue.');
    }
});

// SCHEMA: Define the collection's schema.
const restaurantSchema = mongoose.Schema({
	restaurantName:   { type: String, required: true },
	dateVisited:     { type: Date, required: true },
	reviewScore:     { type: Number, required: true, default: 0, min:[0, 'Error, cannot have negative review score!'], max:[100, 'Error, max score is 100']},
    reviewString:    { type: String, required: true},
});

// Compile the model from the schema 
const restaurants = mongoose.model('Restaurant', restaurantSchema);


// CREATE model *****************************************
const createRestaurant = async (restaurantName, dateVisited, reviewScore, reviewString) => {
    const restaurant = new restaurants({ 
        restaurantName: restaurantName, 
        dateVisited: dateVisited, 
        reviewScore: reviewScore,
        reviewString: reviewString
    });
    return restaurant.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveRestaurants = async () => {
    const query = restaurants.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveRestaurantByID = async (_id) => {
    const query = restaurants.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteRestaurantById = async (_id) => {
    const result = await restaurants.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateRestaurant = async (_id, restaurantName, dateVisited, reviewScore, reviewString) => {
    const result = await restaurants.replaceOne({_id: _id }, {
        restaurantName: restaurantName, 
        dateVisited: dateVisited, 
        reviewScore: reviewScore,
        reviewString: reviewString
    });
    return { 
        restaurantName: restaurantName, 
        dateVisited: dateVisited, 
        reviewScore: reviewScore,
        reviewString: reviewString
    }
}

// EXPORT the variables for use in the controller file.
export { createRestaurant, retrieveRestaurants, retrieveRestaurantByID, updateRestaurant, deleteRestaurantById }