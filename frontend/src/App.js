// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import pages
import HomePage from './pages/HomePage';
import TopicsPage from './pages/TopicsPage';
import GalleryPage from './pages/GalleryPage'; // Extra Credit
import ContactPage from './pages/ContactPage'; // Extra Credit
import OrderPage from './pages/OrderPage'; // Extra Credit
import StaffPage from './pages/StaffPage'; // New Staff Page
import RestaurantsPage from './pages/RestaurantsPage';
import AddRestaurantPageForm from './pages/AddRestaurantPageForm';
import EditRestaurantPageForm from './pages/EditRestaurantPageForm';

function App() {
  const [restaurant, setRestaurantToEdit] = useState([]);

  return (
    <>
      <BrowserRouter>
        <header>
          <h1>Martin Nguyen <img src="/android-chrome-192x192.png" alt="favicon symbol" /></h1>
        </header>

        <Navigation />

        <main>
          <section>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/topics" element={<TopicsPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/order" element={<OrderPage />} />
              <Route path="/staff" element={<StaffPage />} /> {/* Add StaffPage Route */}
              <Route path="/log" element={<RestaurantsPage setRestaurant={setRestaurantToEdit}/>} />
              <Route path="/create" element={<AddRestaurantPageForm />} />
              <Route path="/update" element={<EditRestaurantPageForm restaurantToEdit={restaurant} />} />
            </Routes>
          </section>
        </main>

        <footer>
          <p>&copy; 2023 Martin Nguyen</p>
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;