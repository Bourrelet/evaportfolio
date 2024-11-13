import React from 'react';
import data from '../data/data.json'
import Badge from '../components/Badge';
import '../styles/Home.scss';

function Home() {
  
  return (
    <div className="home-page">
      <div className="home-page__intro">
        <div className="home-page__intro__txt">
          <h2>Web Developer Eva</h2>
          <h1>Hello human, I can help.</h1>
          <p>I’m a junior developer driven by a need for intellectually stimulation. <br/>
            I aim to deepen my technical skills in a way that lets me build out my own projects in the future and bring my ideas to life. <br/>
            Learning useful, and steady technologies is essential to me, because I have issues with “half-done” or shaky work. <br/>
            My approach is always to get to the heart of each concept, ensuring the solutions I create are solid and well-crafted.</p>
        </div>
        <div className="home-page__intro__frame">
          <img className="home-page__intro__frame__photo" src="/images/eva_placeholder.jpg" alt="portrait of Eva"/>
        </div>
      </div>

      <div className="home-page__intro__badges">
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
