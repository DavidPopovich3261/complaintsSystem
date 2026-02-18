import { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Useprovider } from '../Providercontext'
import "../css/admin.css"

function AdminLoginPage() {
    const { setToken } = useContext(Useprovider)
    const navigate = useNavigate()
    const [password, setPassword] = useState("")
    const entry = async () => {
        try {
            let res = await fetch("http://localhost:8000/api/admin/login", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    "password": JSON.stringify(password)
                }
            })
            if (res.ok) {

                res = await res.json()
                console.log(res);
                setToken(res.token)
                navigate("/admin")
            }
            else {
                alert((await res.json()).message)
            }
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <div className='Admin'>
            <h1>Admin Login Page</h1>
            <div>
                <h2>כניסה לאדמין</h2>
                <label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    :סיסמה
                </label>
                <button onClick={entry}>התחברות</button>
            </div>
        </div>
    )
}

export default AdminLoginPage