import React from 'react';
import Jobs from './components/body';
import RegistrationForm from './components/registrationform';
import LoginForm from './components/loginform'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
    <Router>
      <Routes>
        <Route path="" element={<Jobs />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default App;