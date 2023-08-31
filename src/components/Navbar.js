import React, { useState } from 'react'

import "./Navbar.css"

function Navbar() {
  const [click, Setclick] = useState(false);

  const handleClick = () =>Setclick(!click);

  return (
    
    <div className='head'>
      <h1>A1tek<svg width="100px" height="100px" viewBox="-5.04 -5.04 34.08 34.08" xmlns="http://www.w3.org/2000/svg" fill="#fff" stroke="#1d1330" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>webhook</title> <rect width="24" height="24" fill="none"></rect> <path d="M10.46,19a4.59,4.59,0,0,1-6.37,1.15,4.63,4.63,0,0,1,2.49-8.38l0,1.43a3.17,3.17,0,0,0-2.36,1.36A3.13,3.13,0,0,0,5,18.91a3.11,3.11,0,0,0,4.31-.84,3.33,3.33,0,0,0,.56-1.44v-1l5.58,0,.07-.11a1.88,1.88,0,1,1,.67,2.59,1.77,1.77,0,0,1-.83-1l-4.07,0A5,5,0,0,1,10.46,19m7.28-7.14a4.55,4.55,0,1,1-1.12,9,4.63,4.63,0,0,1-3.43-2.21L14.43,18a3.22,3.22,0,0,0,2.32,1.45,3.05,3.05,0,1,0,.75-6.06,3.39,3.39,0,0,0-1.53.18l-.85.44L12.54,9.2h-.22a1.88,1.88,0,1,1,.13-3.76A1.93,1.93,0,0,1,14.3,7.39a1.88,1.88,0,0,1-.46,1.15l1.9,3.51a4.75,4.75,0,0,1,2-.19M8.25,9.14A4.54,4.54,0,1,1,16.62,5.6a4.61,4.61,0,0,1-.2,4.07L15.18,9a3.17,3.17,0,0,0,.09-2.73A3.05,3.05,0,1,0,9.65,8.6,3.21,3.21,0,0,0,11,10.11l.39.21-3.07,5a1.09,1.09,0,0,1,.1.19,1.88,1.88,0,1,1-2.56-.83,1.77,1.77,0,0,1,1.23-.17l2.31-3.77A4.41,4.41,0,0,1,8.25,9.14Z"></path> </g></svg></h1>

      <ul  id='list' className={click ? "list active" : "list"}>
      <li className="active" onClick={handleClick}><a href="#home">Home</a></li>
      <li><a href="#contact" onClick={handleClick}>Contact</a></li>
    <li><a href="#about" onClick={handleClick}>About</a></li>
    <li><a href="#faq" onClick={handleClick}>FAQ</a></li>
        
      </ul>
      
      <div className='mobile'  onClick={handleClick}>
        <i className={click ? 'fas fa-times': 'fas fa-bars' }></i>
        
      </div>
    </div>
    
    
    
  )
}

export default Navbar