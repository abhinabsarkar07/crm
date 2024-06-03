import React from 'react';

//importing react router libraries
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//importing components
import HomePage from './Pages/Hompage/HomePage';
import CandidateDetails from './Pages/CandidateDetails/CandidateDetails';
import Layout from './Components/Layout/Layout';
import CandidateForm from './Pages/CandidateForm/CandidateForm';

function App() {
  return (
    <>
    <Router>
      <Routes>
        {/* <Route path="/" element={<HomePage />} />
            <Route path="/" element={<HomePage />} /> */}
          <Route path='/' element={<Layout />} >
              <Route path="/" element={<HomePage />} />
              <Route path="/candidatedetails" element={<CandidateDetails />} />
              <Route path="/candidateform" element={<CandidateForm />} />
              {/* <Route path="/" element={<HomePage />} />
              <Route path="/" element={<HomePage />} /> */}
          </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App