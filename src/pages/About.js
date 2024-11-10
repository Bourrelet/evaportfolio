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
          <p>I'm Eva, I love expensive things.</p>
          <p>I wanna live a stress-free and quiet life.</p>
          <p>I can help. </p>
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
