import React,{useState} from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const CreateJob=()=>{
	const navigateTo=useNavigate();
	const [title,setTitle]=useState('')
	const [company,setCompany]=useState('')
	const [location,setLocation]=useState('')
	const [description,setDescription]=useState('')
	const [requirements,setRequirements]=useState('')
	const handleCreate = async (e) => {
	    e.preventDefault();

	    try {
	      const response = await axios.post('http://localhost:8000/api/create', {
	        title,
	        company,
	        location,
	        description,
	        requirements
	      });
	      console.log('created sucessfully')
	      navigateTo('/')
	    } catch (error) {
	      console.error('job creation failed:', error);
	    }
  };

  return (
        <form className="max-w-md mx-auto mt-8" onSubmit={handleCreate}>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Title:
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Company:
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </label>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Location:
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </label>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description:
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Requirements:
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
            />
          </label>
          <button
            type="submit"
            className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create
          </button>
        </form>
  );
};

export default CreateJob;