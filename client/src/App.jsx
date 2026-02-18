import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SubmitComplaintPage from './pages/SubmitComplaintPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminComplaintsPage from './pages/AdminComplaintsPage';
import { Providercontext } from './Providercontext';
import "./app.css"
import Protect from './pages/Protect';

function App() {
  return (
    <div className="app">
      <Providercontext>
        <BrowserRouter >
          <Routes >
            <Route path="/" element={<HomePage />} />
            <Route path='/submit' element={<SubmitComplaintPage />} />
            <Route path="/admin/login" element={<AdminLoginPage />} />
            <Route path="/admin" element={
              <Protect>
                <AdminComplaintsPage />
              </Protect>
            } />
          </Routes>
        </BrowserRouter>
      </Providercontext>
    </div>
  )
}

export default App