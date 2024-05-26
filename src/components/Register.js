import React, { useState } from 'react';
import axios from 'axios';

const Register = ({ history }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    role: 'buyer',
  });

  const { firstName, lastName, email, phoneNumber, password, role } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://rentbackend-y3p9.onrender.com/api/auth/register', {
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
        role,
      });
      console.log('Registration successful:', response.data);
      history.push('/login');
    } catch (error) {
      if (error.response && error.response.data) {
        console.error('Error registering user:', error.response.data);
      } else {
        console.error('Error registering user:', error.message);
      }
    }
  };

  return (
   <>
    <form onSubmit={onSubmit} className="max-w-md mx-auto p-4 border">
      <h2 className="text-xl mb-4">Register</h2>
      <input
        type="text"
        name="firstName"
        value={firstName}
        onChange={onChange}
        placeholder="First Name"
        className="mb-2 p-2 border"
        required
      />
      <input
        type="text"
        name="lastName"
        value={lastName}
        onChange={onChange}
        placeholder="Last Name"
        className="mb-2 p-2 border"
        required
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={onChange}
        placeholder="Email"
        className="mb-2 p-2 border"
        required
      />
      <input
        type="text"
        name="phoneNumber"
        value={phoneNumber}
        onChange={onChange}
        placeholder="Phone Number"
        className="mb-2 p-2 border"
        required
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={onChange}
        placeholder="Password"
        className="mb-2 p-2 border"
        required
      />
      <select name="role" value={role} onChange={onChange} className="mb-2 p-2 border">
        <option value="buyer">Buyer</option>
        <option value="seller">Seller</option>
      </select>
      <button type="submit" className="p-2 bg-blue-500 text-white">Register</button>
    </form>
    <a href="/login" className='flex justify-center mt-5 bg-blue-500 w-1/6 mx-auto font-medium text-white cursor-pointer hover:bg-white hover:text-blue-500 rounded-xl border-blue-500 border-2 items-center text-center'>Login</a>
   </>
    
  );
};

export default Register;
