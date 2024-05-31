import React, { useState } from 'react';
import StaffRow from '../components/StaffRow';

function StaffPage() {
  const [staff, setStaff] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?results=10');
      const data = await response.json();
      setStaff(data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <h2>Staff List</h2>
      <section>
        <h3 style={{ color: '#F2BD1D' }}>Please click the button to list new staff members fetched from the Random User Generator API.</h3>
        <p>If the service is down, a status message will appear after clicking the button.</p>
        <p>Every 10 clicks of the button will show you how many times you both clicked the button and listed new staff members in the console.</p>
        <p>For more information about the API, please visit the documentation at <a href="https://randomuser.me/documentation" target="_blank" rel="noopener noreferrer">Random User Generator API</a>.</p>
        <button onClick={fetchData}>Fetch Data</button>

        <h3>Staff Members</h3>
        <table id="staffTable">
          <thead>
            <tr>
              <th>Photo</th>
              <th>Name & Email</th>
              <th>Phone Number</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {staff.map((person, index) => (
              <StaffRow key={index} person={person} />
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}

export default StaffPage;