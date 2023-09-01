import React from 'react'

function Home() {
  return (
    <div className='home'>
      <section id='home'>
      <div className='home-svg'>
      <svg className='wifii' width="150px" height="200px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M8 8a48 48 0 0 1 48 48"></path><path d="M8 24a32 32 0 0 1 32 32"></path><path d="M8 40a16 16 0 0 1 16 16"></path></g></svg>
     <img className='light-bulb' loading='lazy'  src='./Image/invention-icon.PNG' alt='bulb'/>
      </div>
        <div className='home-cen'>
          <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shield-shaded" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 14.933a.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067v13.866zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
</svg> Trusted since 2021.</p>
        <h1>Hello</h1>
        <label>welcome to A1tek</label>

        <div className='socials'>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-instagram"></i>
        </div>
        <p>work with us and let us work for you. thank you</p>
        <a href="#projects" class="btn btn-success btn-lg btn-black">Let's create!</a>


        </div>
        </section>
    </div>
  )
}

export default Home