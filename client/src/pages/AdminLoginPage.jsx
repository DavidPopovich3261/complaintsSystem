import { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Useprovider } from '../Providercontext'

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
            res = await res.json()
            console.log(res);
            setToken(res.token)
            navigate("/admin")
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <div>
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
            <button onClick={entry}>entry</button>
        </div>
    )
}

export default AdminLoginPage