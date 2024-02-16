import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserInfo = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/login')
      .then(response => setUser(response.data))
      .catch(error => console.error('Error fetching jobs', error));
  }, []);

  return user;
};

export default UserInfo;
