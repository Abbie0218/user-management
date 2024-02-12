import React, { useState } from 'react'
import AddUser from './AddUser'
import UserList from './UserList'

const UserManagement = () => {
  let [editUserFlag, setEditUserFlag] = useState(false);
  
  const openDialog = () => {
    setEditUserFlag(true);
  };

  const closeDialog = () =>{
    setEditUserFlag(false);
  }

  return (
    <div style={{margin:"11px"}}>
        <AddUser open={editUserFlag} closeDialog={closeDialog} openDialog={openDialog} />
        <br/>
        <UserList />
    </div>
  )
}

export default UserManagement;