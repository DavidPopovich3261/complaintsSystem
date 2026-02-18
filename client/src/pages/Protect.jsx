import React, { useContext } from 'react'
import { Useprovider } from '../Providercontext'
import { Navigate } from 'react-router-dom';

function Protect({children}) {
    const {token} =useContext(Useprovider)
    if(!token)  return <Navigate to="/admin/login" replace />;
  return (
    children
  )
}

export default Protect