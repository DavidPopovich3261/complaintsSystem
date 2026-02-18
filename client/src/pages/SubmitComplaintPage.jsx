import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';


function SubmitComplaintPage() {
    const navigate = useNavigate()
    const [category, setCategory] = useState("food")
    const [message, setMessage] = useState("")
    const handleChangecategory = (event) => {
        setCategory(event.target.value)
    }
    const handleChangemessage = (event) => {
        setMessage(event.target.value)
    }
    const send = async () => {
        let res = await fetch("http://localhost:8000/api/complaints", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                category: category,
                message: message
            })
        })
        res = await res.json()
        alert(res.message);
        navigate("/")
    }

    return (
        <div className='complaint'>
            <h1>SubmitComplaintPage</h1>
            <div >
                <h2>שליחת תלונה אנונימית</h2>
                <p>תחום התלונה</p>
                <select value={category} onChange={handleChangecategory}>
                    <option value="food">אוכל </option>
                    <option value="equipment">ציוד </option>
                    <option value="commands">פקודות </option>
                    <option value="other">אחר</option>
                </select>
                <textarea value={message} onChange={handleChangemessage} placeholder='כתוב בבקשה את התלונה שלך :'></textarea>
                <button onClick={send}>שליחה</button>
            </div>
        </div>
    )
}

export default SubmitComplaintPage