import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from './Footer'; // Assuming you have a Footer component
import Nav from './Nav'; // Assuming you have a Nav component
import LoginForm from './loginform'

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/jobs')
      .then(response => setJobs(response.data))
      .catch(error => console.error('Error fetching jobs', error));
  }, []);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Nav />
        <div className="flex-grow">
          <div className="bg-gray-900 text-white shadow-md p-6 rounded-md max-w-lg mx-auto mt-2 mb-2">
            <h1 className="text-3xl font-bold mb-4">Job Board</h1>
            <ul>
              {jobs.map(job => (
                <li key={job.id} className="border-b py-4">
                  <h3 className="text-xl font-semibold mb-2 text-gray-100">{job.title}</h3>
                  <p className="text-gray-300 mb-2">Description: {job.description}</p>
                  <p className="text-gray-300 mb-2">Requirement: {job.requirements}</p>
                  <p className="text-gray-300">Company: {job.company} - {job.location}</p>
                  <button
                    onClick={() => console.log(`Applying for job: ${job.title}`)}
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none"
                  >
                    Apply
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Jobs;
