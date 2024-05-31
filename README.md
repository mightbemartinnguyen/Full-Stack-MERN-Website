# Full-Stack MERN Website

## Overview

This project is a full-stack web application built using the MERN stack (MongoDB, Express.js, React, Node.js). It demonstrates the implementation of a dynamic, responsive web application with a RESTful API backend, user authentication, and CRUD operations.

## Features

- **User Authentication**: Register and login functionality with JWT-based authentication.
- **CRUD Operations**: Create, Read, Update, and Delete functionalities for managing data.
- **Responsive Design**: Ensures the application is accessible and visually appealing on all devices.
- **RESTful API**: Backend API built with Express.js to handle client requests and interact with MongoDB.

## Technologies Used

- **MongoDB**: Database to store application data.
- **Express.js**: Web framework for building the backend.
- **React**: Frontend library for building user interfaces.
- **Node.js**: JavaScript runtime for the backend.
- **JWT (JSON Web Tokens)**: For secure user authentication.

## Project Structure

- `backend/`: Contains the server-side code.
  - `server.js`: Main server file.
  - `routes/`: Defines the API routes.
  - `models/`: Defines the MongoDB schemas.
  - `controllers/`: Contains the logic for handling requests.
- `frontend/`: Contains the client-side code.
  - `src/`: Main source directory for React components and other assets.
  - `App.js`: Main React component.
  - `components/`: Contains reusable React components.
  - `services/`: Contains services for making API requests.

## Installation

### Prerequisites

- Node.js and npm installed on your system.
- MongoDB installed and running.

### Backend Setup
1. Install the dependencies:
    ```bash
    npm install
    ```

2. Add your own MONGODB_CONNECT_STRING to the .env file
    ```env
    MONGODB_CONNECT_STRING='mongodb+srv://actuallymartinnguyen:Darksouls456258@cluster1.vcmjims.mongodb.net/'
    PORT=3000
    ```

4. Start the server:
    ```bash
    npm start
    ```

### Frontend Setup

1. Navigate to the `frontend` directory:
    ```bash
    cd ../frontend
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the React development server:
    ```bash
    npm start
    ```

4. Open your browser and go to `http://localhost:3000` to view the application.

## Screenshots

![Home Page](screenshots/home.jpg)
![Gallery Page](screenshots/Gallery.jpg)
![Contact Page](screenshots/contact.jpg)
![Edit Page](screenshots/edit.jpg)
![Order Page](screenshots/order.jpg)
![Restaurants Page](screenshots/resturants.jpg)
![Staff Page](screenshots/staff.jpg)
![Submit Page](screenshots/submit.jpg)
![Topics Page](screenshots/topics.jpg)

