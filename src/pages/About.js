import React from 'react';
import '../styles/About.scss'

function About() {
  return (
    <div className='aboutMe'>

      <div className='aboutMe__content'>

        <div className='aboutMe__content__banner'>

          <h2>Splendid, perfectly.</h2>
          <button className="aboutMe__content__banner__resume" onClick={() => window.open("https://drive.google.com/file/d/1oIPyKeSr0YKJaHK1Clt3bS2VRK5plL0y/view?usp=drive_link", "_blank", "noopener,noreferrer")}>
            Resume
          </button>

        </div>
        
        <div className='aboutMe__content__description'>
          <p>I started my journey as a Developer on FreeCodeCamp, I got two certifications, one in responsive web design and another in javascript algorithms. 
              Then I followed the OpenClassrooms Web Developer program to obtain an actual qualification, and improve my skills by completing real projects. <br/>
              I’m eager to dive deeper into tech, aiming to gain the skills to achieve my ambitions of wealth and glory. <br/>
              I enjoy projects that challenge me and let me grow, valuing clarity, thoroughness, and technical depth in all I do.
          </p>          
        </div>

      </div>

      <div className='aboutMe__frame'>
        <img className='aboutMe__frame__photo' src="/images/circleeva.png"/>
      </div>

    </div>
  );
}

export default About;
