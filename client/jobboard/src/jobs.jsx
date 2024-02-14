import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/jobs')
            .then(response => setJobs(response.data))
            .catch(error => console.error('Error fetching jobs', error));
    }, []);

    return (
        <div>
            <h1>Job Board</h1>
            <ul>
                {jobs.map(job => (
                    <li key={job.id}>
                        <h3>{job.title}</h3>
                        <p>Description:{job.description}</p>
                        <p>Company:{job.company} - {job.location}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Jobs;
