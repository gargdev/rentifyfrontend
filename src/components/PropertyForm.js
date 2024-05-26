import React, { useState } from 'react';
import axios from 'axios';

const PropertyForm = ({ history }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    area: '',
    bedrooms: '',
    bathrooms: '',
    amenities: '',
    rent: '',
    description: '',
    images: '',
  });

  const { name, address, city, state, zipCode, area, bedrooms, bathrooms, amenities, rent, description, images } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.post('https://rentbackend-y3p9.onrender.com/api/properties', formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      history.push('/properties');
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <form onSubmit={onSubmit} className="max-w-md mx-auto p-4 border">
      <h2 className="text-xl mb-4">Add Property</h2>
      <input
        type="text"
        name="name"
        value={name}
        onChange={onChange}
        placeholder="Property Name"
        className="mb-2 p-2 border"
        required
      />
      <input
        type="text"
        name="address"
        value={address}
        onChange={onChange}
        placeholder="Address"
        className="mb-2 p-2 border"
        required
      />
      <input
        type="text"
        name="city"
        value={city}
        onChange={onChange}
        placeholder="City"
        className="mb-2 p-2 border"
        required
      />
      <input
        type="text"
        name="state"
        value={state}
        onChange={onChange}
        placeholder="State"
        className="mb-2 p-2 border"
        required
      />
      <input
        type="text"
        name="zipCode"
        value={zipCode}
        onChange={onChange}
        placeholder="Zip Code"
        className="mb-2 p-2 border"
        required
      />
      <input
        type="number"
        name="area"
        value={area}
        onChange={onChange}
        placeholder="Area (sq ft)"
        className="mb-2 p-2 border"
        required
      />
      <input
        type="number"
        name="bedrooms"
        value={bedrooms}
        onChange={onChange}
        placeholder="Number of Bedrooms"
        className="mb-2 p-2 border"
        required
      />
      <input
        type="number"
        name="bathrooms"
        value={bathrooms}
        onChange={onChange}
        placeholder="Number of Bathrooms"
        className="mb-2 p-2 border"
        required
      />
      <input
        type="text"
        name="amenities"
        value={amenities}
        onChange={onChange}
        placeholder="Amenities (comma separated)"
        className="mb-2 p-2 border"
        required
      />
      <input
        type="number"
        name="rent"
        value={rent}
        onChange={onChange}
        placeholder="Rent Amount"
        className="mb-2 p-2 border"
        required
      />
      <textarea
        name="description"
        value={description}
        onChange={onChange}
        placeholder="Description"
        className="mb-2 p-2 border"
        required
      />
      <input
        type="text"
        name="images"
        value={images}
        onChange={onChange}
        placeholder="Images URLs (comma separated)"
        className="mb-2 p-2 border"
        required
      />
      <button type="submit" className="p-2 bg-blue-500 text-white">Add Property</button>
    </form>
  );
};

export default PropertyForm;
