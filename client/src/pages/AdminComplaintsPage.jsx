import React, { useState, useEffect } from 'react'
import "../css/data.css"
function AdminComplaintsPage() {
  const [category, setCategory] = useState("food")
  const [data, setData] = useState([])
  const handleChangecategory = (event) => {
    setCategory(event.target.value)
  }
  useEffect(() => {
    async function fetchData() {
      let result = await fetch("http://localhost:8000/api/complaints");
      result = await result.json();
      setData(result.data);
    }
    fetchData();
  }, [])
  return (
    <div className='data'>
      <h1>Admin Complaints Page</h1>
      <h2>רשימת התלונות </h2>
      <select value={category} onChange={handleChangecategory}>
        <option value="food">אוכל </option>
        <option value="equipment">ציוד </option>
        <option value="commands">פקודות </option>
        <option value="other">אחר</option>
        <option value="all">הכול</option>
      </select>
      <div className='data b'>
        {data && data.filter(item => item.category == category || category=="all"
        ).map((item) => {
          return (
            <div key={item._id}>
              <h3>{item.category}</h3>
              <p>{item.message}</p>
              <p>{item.createdAt}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AdminComplaintsPage