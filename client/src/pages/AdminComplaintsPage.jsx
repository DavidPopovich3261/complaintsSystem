import React, { useState, useEffect } from 'react'

function AdminComplaintsPage() {
  const [data, setData] = useState([{ category: '3333' }])

  useEffect(() => {
    fetch("http://localhost:8000/api/complaints")
      .then(res => res.json())
      .then(json => setData(json.data))


      , []
  })

console.log(222, data.data)
  return (
    <div>
      <p>uuuu</p>
      {data.map((item) => {
        return (<>
          <p>aaaa</p>
          <h1>{JSON.stringify(item)}</h1>
        </>
        )
      })}

    </div>
  )
}

export default AdminComplaintsPage