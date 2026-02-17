import { useState } from 'react'
import { createContext } from 'react'

const Useprovider = createContext()
function Providercontext({ children }) {
    const [token, setToken] = useState()
    return (
        <Useprovider value={{ token, setToken }}>
            {children}
        </Useprovider>
    )
}

export { Providercontext, Useprovider }