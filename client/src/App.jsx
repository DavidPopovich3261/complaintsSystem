import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SubmitComplaintPage from './pages/SubmitComplaintPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminComplaintsPage from './pages/AdminComplaintsPage';
import { Providercontext } from './Providercontext';

function App() {
  return (
    <Providercontext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/submit' element={<SubmitComplaintPage />} />
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin" element={<AdminComplaintsPage />} />
        </Routes>
      </BrowserRouter>
    </Providercontext>
  )
}

export default App