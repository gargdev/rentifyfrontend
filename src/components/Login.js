import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ history }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://rentbackend-y3p9.onrender.com/api/auth/login', formData);
      localStorage.setItem('token', response.data.token);
      console.log('Login successful:', response.data);
      history.push('/properties');
    } catch (error) {
      if (error.response && error.response.data) {
        console.error('Error logging in:', error.response.data);
      } else {
        console.error('Error logging in:', error.message);
      }
    }
  };

  return (
    <>
    <form onSubmit={onSubmit} className="max-w-md mx-auto p-4 border">
      <h2 className="text-xl mb-4">Login</h2>
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
        type="password"
        name="password"
        value={password}
        onChange={onChange}
        placeholder="Password"
        className="mb-2 p-2 border"
        required
      />
      <button type="submit" className="p-2 bg-blue-500 text-white">Login</button>
    </form>
    <a href="/" className='flex justify-center mt-5 bg-blue-500 w-1/6 mx-auto font-medium text-white cursor-pointer hover:bg-white hover:text-blue-500 rounded-xl border-blue-500 border-2 items-center text-center'>Register</a>
    </>
  );
};

export default Login;
