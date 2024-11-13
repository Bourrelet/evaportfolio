import React from 'react';
import data from '../data/data.json'
import Badge from '../components/Badge';
import '../styles/Home.scss';

function Home() {
  
  return (
    <div className="home-page">

      <div className="home-page__intro">
        <div className="home-page__intro__title">
          <h2>Web Developer Eva</h2>
          <h1>Hello human, I can help.</h1>
        </div>
        <div className="home-page__intro__txt">
          <p>
            I’m Eva, still a junior developer, but driven by a need for intellectual stimulation, and a thirst for knowledge. <br/><br/>
                I am always happy to deepen my technical skills because I want to be able to build my own projects in the future and bring my ideas to life. <br/><br/>
                My approach is always to get to the heart of each concept, ensuring the solutions I create are solid and well-crafted, as I have issues with  with “half-done” or shaky work.
          </p>
          <p>Here's a pannel of my skills to this day :</p>
        </div>
        <div className="home-page__intro__frame">
          <img className="home-page__intro__frame__photo" src="/images/eva_placeholder.jpg" alt="portrait of Eva"/>
        </div>
      </div>

 

      <div className="home-page__badges">
        {data.techs.map(tech =>
          (<Badge
          key={tech.id}
          id={tech.id}
          name={tech.name}
          logo={tech.logo}
          skills={tech.skills}
          />))
        }  
      </div>
    </div>
  );
}

export default Home;
