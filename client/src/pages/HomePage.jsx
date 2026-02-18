import { useNavigate } from 'react-router-dom'
import "../css/homepage.css"

function HomePage() {
  const navigate = useNavigate()
  return (
    <div className='homepage'>
      <h1>Home Page</h1>
      <div className='a'>
        <h2>תיבת תלונות אנונימיות </h2>
        <p>שליחת תלונה בצורה אנונימית ובטוחה</p>
        <button onClick={() => { navigate("submit") }}>Submit Complaint Page</button>
      </div>
      <div className='b'>
        <h2>מפקדים בלבד</h2>
        <button onClick={() => { navigate("admin/login") }}>Admin Login Page</button>
      </div>
    </div>
  )
}

export default HomePage