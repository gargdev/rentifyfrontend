import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get('https://rentbackend-y3p9.onrender.com/api/properties')
      .then(response => setProperties(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleInterest = (propertyId) => {
    // Handle the "I'm Interested" functionality
    const token = localStorage.getItem('token');
    axios.post(`https://rentbackend-y3p9.onrender.com/api/properties/${propertyId}/like`, {}, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(response => {
      // Update the property list to reflect the new like count
      setProperties(properties.map(property =>
        property._id === propertyId ? response.data : property
      ));
    })
    .catch(error => {
      console.error(error);
      if (error.response && error.response.status === 401) {
        alert('Please login to like properties.');
      }
    });
  };

  return (
    <div className="container mx-auto">
      {properties.map(property => (
        <div key={property._id} className="p-4 border">
          <h2>{property.name}</h2>
          <p>{property.description}</p>
          <p>{property.city}, {property.state}</p>
          <button onClick={() => handleInterest(property._id)} className="p-2 bg-blue-500 text-white">I'm Interested</button>
          <p>Likes: {property.likes}</p>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
