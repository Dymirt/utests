// src/Profile.js

import React from 'react';
 
// Define prof_data constant as an array of objects
const prof_data = [
  {
    name: 'John Doe',
    age: 28,
    location: 'New York, USA',
    pic : '#'
  },/*
  {
    name: 'Jane Smith',
    age: 32,
    location: 'London, UK',
    profession: 'Graphic Designer'
  },
  {
    name: 'Sam Wilson',
    age: 25,
    location: 'Sydney, Australia',
    profession: 'Product Manager'
  }
    */
];

function Profile() {
  return (
    <div className="profile">

      {prof_data.map((profile, index) => (
        <div key={index} className="profile-info">

      <div class="profil_pic">
        <img src={profile.pic} ></img>
      </div>
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Age:</strong> {profile.age}</p>
          <p><strong>Location:</strong> {profile.location}</p>
          <p><strong>Profession:</strong> {profile.profession}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Profile;
