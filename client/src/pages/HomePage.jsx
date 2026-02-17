import React from 'react'
import { useNavigate } from 'react-router-dom'

function HomePage() {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={() => { navigate("submit") }}>Submit Complaint Page</button>
      <button onClick={() => { navigate("admin/login") }}>Admin Login Page</button>
    </div>
  )
}

export default HomePage