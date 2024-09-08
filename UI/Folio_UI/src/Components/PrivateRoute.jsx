import React from 'react'
import { Navigate } from 'react-router-dom'

function PrivateRoute({children}) {
const token=sessionStorage.getItem("token")||""
let isAuthenticated=false;
if(token.length>0)
    isAuthenticated=true
    if (isAuthenticated ) {
        return children
      }
        
      return <Navigate to="/" />
}

export default PrivateRoute