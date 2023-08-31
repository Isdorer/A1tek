import React from 'react'

function About() {
  return (
    <div className='about-heading'>
      <section  id="about">
    <h1 className='about-title'>About this page</h1>
    <div className='svlog'>
    <svg xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24" 
    height="100px" viewBox="0 0 24 24" 
    width="100px" fill="#000000"><g>
      <rect fill="none" height="24"
       width="24"/></g><g><path
        d="M23,12l-2.44-2.79l0.34-3.69l-3.61-0.82L15.4,1.5L12,2.96L8.6,1.5L6.71,4.69L3.1,5.5L3.44,9.2L1,12l2.44,2.79l-0.34,3.7 l3.61,0.82L8.6,22.5l3.4-1.47l3.4,1.46l1.89-3.19l3.61-0.82l-0.34-3.69L23,12z M10.09,16.72l-3.8-3.81l1.48-1.48l2.32,2.33 l5.85-5.87l1.48,1.48L10.09,16.72z"/>
        </g></svg>
        </div>
    <div className='about'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR29dL-cfG01C8BoVeTyOaygykk49s-CKf9gw&usqp=CAU.jpg' alt='tech paper'></img>

        
        <div className='bio'>
         <p>My name is Agoha Isdore Chibuike, and i'm 24 years old a frontend web developer. <br/>
         I've been passionate about computers and how the internet works since 2020 when i discovered my interests on it .<br/>
         Since then i have been self-taught, using online classes and YouTube to learn how to create websites and web application.<br/>
         Below are my projects with beautiful designs </p>
        </div>
        </div>
        </section>
    </div>
  )
}

export default About