import React from 'react';

function StaffRow({ person }) {
  return (
    <tr>
      <td><img src={person.picture.thumbnail} alt={`${person.name.first} ${person.name.last}`} /></td>
      <td>{person.name.first} {person.name.last}<br />{person.email}</td>
      <td>{person.phone}</td>
      <td>{person.location.city}</td>
    </tr>
  );
}

export default StaffRow;