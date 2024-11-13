import React from 'react';
import '../styles/About.scss'

function About() {
  return (
    <div className='aboutMe'>

      <div className='aboutMe__content'>

        <div className='aboutMe__content__title'>
          <h2>About Eva</h2>
        </div>
        <div className='aboutMe__content__description'>
        <p>My developper journey started on FreeCodeCamp with two certifications in responsive web design an javascript algorithms. 
             Then I followed the OpenClassrooms Web Developer program to advance my skills by completing real projects. <br/>
            I’m eager to dive deeper into the tech world, with a goal of becoming skilled enough to realize my own ideas fully. <br/>
            I enjoy projects that challenge me and let me grow, valuing clarity, thoroughness, and technical depth in all I do
            </p>
          
        </div>

        <button className="aboutMe__content__resume" onClick={() => window.open("https://drive.google.com/file/d/1oIPyKeSr0YKJaHK1Clt3bS2VRK5plL0y/view?usp=drive_link", "_blank", "noopener,noreferrer")}>
        Resume
        </button>

      </div>

      <div className='aboutMe__frame'>
        <img className='aboutMe__frame__photo' src="/images/homelander.webp"/>
      </div>

    </div>
  );
}

export default About;
