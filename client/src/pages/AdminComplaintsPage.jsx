import React from 'react'

function AdminComplaintsPage() {
  let data
  async()=>{
    data = await fetch("/api/complaints")
    data = await data.json()
    console.log(data);
  }
  
  return (
    <div>
      {data.map((item) => {
        return (
          <div>
            {JSON.stringify(item)}
          </div>
        )
      }
      )}
    </div>
  )
}

export default AdminComplaintsPage