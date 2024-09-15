import React from 'react'

function Header() {
  return (
    <div style={{backgroundColor:"red",
                 fontSize:"20px",
                 padding:"5px",
                 borderRadius:"20px",
                 }}>
        <a className='a' href="/">Home</a>
        <a className='a' href="/about">About</a>
        <a className='a' href="/contactus">Contact</a>
    </div>
  )
}

export default Header