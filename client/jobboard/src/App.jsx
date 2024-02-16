import React from 'react';
// import Jobs from './components/body';
// import RegistrationForm from './components/registrationform';
// import LoginForm from './components/loginform'
// import CreateJob from './components/createjob'
import Test from './components/test'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
    <Router>
      <Routes>
        {/* <Route path="" element={<Jobs />} /> */}
        {/* <Route path="/register" element={<RegistrationForm />} /> */}
        {/* <Route path="/login" element={<LoginForm />} /> */}
        {/* <Route path="/create" element={<CreateJob />} /> */}
        <Route path="/test" element={<Test />} /> 
      </Routes>
    </Router>
  );
}

export default App;