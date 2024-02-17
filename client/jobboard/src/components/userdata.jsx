import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserInfo = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/login', {withCredentials: true,headers:{
                    	Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA4MTY0NjAwLCJpYXQiOjE3MDgxNjQzMDAsImp0aSI6ImNjZTJlZTA2NmVjYzQ2ODk5MDFhYzcwNTQ0MjE3ZjkyIiwidXNlcl9pZCI6MX0.wqbn49h9_-nqLWFcnSpd96MhMKPAROt3lF5mKkMA--c'
                    }}
                 )
      .then(response => setUser(response.data))
      .catch(error => console.error('Error fetching jobs', error));
  }, []);

  return user;
};

export default UserInfo;
