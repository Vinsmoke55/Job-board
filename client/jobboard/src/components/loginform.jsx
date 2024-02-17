import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import Nav from "./nav"

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState('');
  const navigateTo=useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/login', {
        username,
        password,

      });
      setUser(response.data)
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      <Nav userData={user}/>
        <form className="max-w-md mx-auto mt-8" onSubmit={handleLogin}>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Username:
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password:
            <input
              type="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button
            type="submit"
            className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </form>
    </div>
  );
};

export default LoginForm;
