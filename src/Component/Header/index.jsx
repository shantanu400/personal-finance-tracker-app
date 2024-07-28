import "./style.css"


import React from 'react'

const Header = () => {
    function logout(){
        alert("logout");
    }
  return (
   <div className="navbar">
     <p className="logo">Personal Finance Tracker</p>
     <p className="logo link" onClick={logout}>Logout</p>

   </div>
  )
}

export default Header