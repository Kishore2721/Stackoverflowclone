import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import './Users.css'
import UserList from './UserList'
const Users = ({slidein}) => {
  return (
  <div className="homes-container-1">
    <LeftSidebar slidein={slidein}/>
    <div className="homes-container-2" style={{marginTop:"30px"}}>
        <h1 style={{fontWeight:"400"}}>Users</h1>
        <UserList/>
    </div>
  </div>
  )
}

export default Users