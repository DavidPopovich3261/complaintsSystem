import React, { useState, useEffect } from 'react'

function AdminComplaintsPage() {
  const [data, setData] = useState([])

  useEffect(() => {
      async function fetchData() {
        let result = await fetch("http://localhost:8000/api/complaints");
        result = await result.json();
        setData(result.data);
      }
      fetchData();
  }, [])
  return (
    <div>
      {data && data.map((item) => {
        return (
          <div key={item._id}>
            <h1>{item.category}</h1>
            <p>{item.message}</p>
          </div>
        )
      })}
    </div>
  )
}

export default AdminComplaintsPage